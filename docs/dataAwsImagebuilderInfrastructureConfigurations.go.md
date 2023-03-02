# `dataAwsImagebuilderInfrastructureConfigurations` Submodule <a name="`dataAwsImagebuilderInfrastructureConfigurations` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderInfrastructureConfigurations <a name="DataAwsImagebuilderInfrastructureConfigurations" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations aws_imagebuilder_infrastructure_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderinfrastructureconfigurations"

dataawsimagebuilderinfrastructureconfigurations.NewDataAwsImagebuilderInfrastructureConfigurations(scope Construct, id *string, config DataAwsImagebuilderInfrastructureConfigurationsConfig) DataAwsImagebuilderInfrastructureConfigurations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig">DataAwsImagebuilderInfrastructureConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig">DataAwsImagebuilderInfrastructureConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderinfrastructureconfigurations"

dataawsimagebuilderinfrastructureconfigurations.DataAwsImagebuilderInfrastructureConfigurations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderinfrastructureconfigurations"

dataawsimagebuilderinfrastructureconfigurations.DataAwsImagebuilderInfrastructureConfigurations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderinfrastructureconfigurations"

dataawsimagebuilderinfrastructureconfigurations.DataAwsImagebuilderInfrastructureConfigurations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.arns">Arns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList">DataAwsImagebuilderInfrastructureConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.names">Names</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arns`<sup>Required</sup> <a name="Arns" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.arns"></a>

```go
func Arns() *[]*string
```

- *Type:* *[]*string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.filter"></a>

```go
func Filter() DataAwsImagebuilderInfrastructureConfigurationsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList">DataAwsImagebuilderInfrastructureConfigurationsFilterList</a>

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.names"></a>

```go
func Names() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderInfrastructureConfigurationsConfig <a name="DataAwsImagebuilderInfrastructureConfigurationsConfig" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderinfrastructureconfigurations"

&dataawsimagebuilderinfrastructureconfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#id DataAwsImagebuilderInfrastructureConfigurations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#filter DataAwsImagebuilderInfrastructureConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#id DataAwsImagebuilderInfrastructureConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsImagebuilderInfrastructureConfigurationsFilter <a name="DataAwsImagebuilderInfrastructureConfigurationsFilter" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderinfrastructureconfigurations"

&dataawsimagebuilderinfrastructureconfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#name DataAwsImagebuilderInfrastructureConfigurations#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#values DataAwsImagebuilderInfrastructureConfigurations#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#name DataAwsImagebuilderInfrastructureConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configurations#values DataAwsImagebuilderInfrastructureConfigurations#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderInfrastructureConfigurationsFilterList <a name="DataAwsImagebuilderInfrastructureConfigurationsFilterList" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderinfrastructureconfigurations"

dataawsimagebuilderinfrastructureconfigurations.NewDataAwsImagebuilderInfrastructureConfigurationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderInfrastructureConfigurationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference <a name="DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderinfrastructureconfigurations"

dataawsimagebuilderinfrastructureconfigurations.NewDataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfigurations.DataAwsImagebuilderInfrastructureConfigurationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



