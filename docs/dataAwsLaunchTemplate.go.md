# `dataAwsLaunchTemplate` Submodule <a name="`dataAwsLaunchTemplate` Submodule" id="@cdktf/provider-aws.dataAwsLaunchTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLaunchTemplate <a name="DataAwsLaunchTemplate" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_template aws_launch_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplate(scope Construct, id *string, config DataAwsLaunchTemplateConfig) DataAwsLaunchTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig">DataAwsLaunchTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig">DataAwsLaunchTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsLaunchTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.DataAwsLaunchTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.DataAwsLaunchTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.DataAwsLaunchTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList">DataAwsLaunchTemplateBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList">DataAwsLaunchTemplateCapacityReservationSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList">DataAwsLaunchTemplateCpuOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList">DataAwsLaunchTemplateCreditSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.defaultVersion">DefaultVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiStop">DisableApiStop</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiTermination">DisableApiTermination</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ebsOptimized">EbsOptimized</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.elasticGpuSpecifications">ElasticGpuSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList">DataAwsLaunchTemplateElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.elasticInferenceAccelerator">ElasticInferenceAccelerator</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList">DataAwsLaunchTemplateElasticInferenceAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList">DataAwsLaunchTemplateEnclaveOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList">DataAwsLaunchTemplateFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList">DataAwsLaunchTemplateHibernationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList">DataAwsLaunchTemplateIamInstanceProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceMarketOptions">InstanceMarketOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList">DataAwsLaunchTemplateInstanceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.kernelId">KernelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.latestVersion">LatestVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.licenseSpecification">LicenseSpecification</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList">DataAwsLaunchTemplateLicenseSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList">DataAwsLaunchTemplateMaintenanceOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList">DataAwsLaunchTemplateMetadataOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList">DataAwsLaunchTemplateMonitoringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList">DataAwsLaunchTemplateNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList">DataAwsLaunchTemplatePlacementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList">DataAwsLaunchTemplatePrivateDnsNameOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ramDiskId">RamDiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.securityGroupNames">SecurityGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList">DataAwsLaunchTemplateTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference">DataAwsLaunchTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.blockDeviceMappings"></a>

```go
func BlockDeviceMappings() DataAwsLaunchTemplateBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList">DataAwsLaunchTemplateBlockDeviceMappingsList</a>

---

##### `CapacityReservationSpecification`<sup>Required</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.capacityReservationSpecification"></a>

```go
func CapacityReservationSpecification() DataAwsLaunchTemplateCapacityReservationSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList">DataAwsLaunchTemplateCapacityReservationSpecificationList</a>

---

##### `CpuOptions`<sup>Required</sup> <a name="CpuOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cpuOptions"></a>

```go
func CpuOptions() DataAwsLaunchTemplateCpuOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList">DataAwsLaunchTemplateCpuOptionsList</a>

---

##### `CreditSpecification`<sup>Required</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.creditSpecification"></a>

```go
func CreditSpecification() DataAwsLaunchTemplateCreditSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList">DataAwsLaunchTemplateCreditSpecificationList</a>

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.defaultVersion"></a>

```go
func DefaultVersion() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableApiStop`<sup>Required</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiStop"></a>

```go
func DisableApiStop() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisableApiTermination`<sup>Required</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiTermination"></a>

```go
func DisableApiTermination() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ebsOptimized"></a>

```go
func EbsOptimized() *string
```

- *Type:* *string

---

##### `ElasticGpuSpecifications`<sup>Required</sup> <a name="ElasticGpuSpecifications" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.elasticGpuSpecifications"></a>

```go
func ElasticGpuSpecifications() DataAwsLaunchTemplateElasticGpuSpecificationsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList">DataAwsLaunchTemplateElasticGpuSpecificationsList</a>

---

##### `ElasticInferenceAccelerator`<sup>Required</sup> <a name="ElasticInferenceAccelerator" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.elasticInferenceAccelerator"></a>

```go
func ElasticInferenceAccelerator() DataAwsLaunchTemplateElasticInferenceAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList">DataAwsLaunchTemplateElasticInferenceAcceleratorList</a>

---

##### `EnclaveOptions`<sup>Required</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.enclaveOptions"></a>

```go
func EnclaveOptions() DataAwsLaunchTemplateEnclaveOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList">DataAwsLaunchTemplateEnclaveOptionsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filter"></a>

```go
func Filter() DataAwsLaunchTemplateFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList">DataAwsLaunchTemplateFilterList</a>

---

##### `HibernationOptions`<sup>Required</sup> <a name="HibernationOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.hibernationOptions"></a>

```go
func HibernationOptions() DataAwsLaunchTemplateHibernationOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList">DataAwsLaunchTemplateHibernationOptionsList</a>

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() DataAwsLaunchTemplateIamInstanceProfileList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList">DataAwsLaunchTemplateIamInstanceProfileList</a>

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceInitiatedShutdownBehavior"></a>

```go
func InstanceInitiatedShutdownBehavior() *string
```

- *Type:* *string

---

##### `InstanceMarketOptions`<sup>Required</sup> <a name="InstanceMarketOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceMarketOptions"></a>

```go
func InstanceMarketOptions() DataAwsLaunchTemplateInstanceMarketOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsList</a>

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceRequirements"></a>

```go
func InstanceRequirements() DataAwsLaunchTemplateInstanceRequirementsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList">DataAwsLaunchTemplateInstanceRequirementsList</a>

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.kernelId"></a>

```go
func KernelId() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.latestVersion"></a>

```go
func LatestVersion() *f64
```

- *Type:* *f64

---

##### `LicenseSpecification`<sup>Required</sup> <a name="LicenseSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.licenseSpecification"></a>

```go
func LicenseSpecification() DataAwsLaunchTemplateLicenseSpecificationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList">DataAwsLaunchTemplateLicenseSpecificationList</a>

---

##### `MaintenanceOptions`<sup>Required</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.maintenanceOptions"></a>

```go
func MaintenanceOptions() DataAwsLaunchTemplateMaintenanceOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList">DataAwsLaunchTemplateMaintenanceOptionsList</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.metadataOptions"></a>

```go
func MetadataOptions() DataAwsLaunchTemplateMetadataOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList">DataAwsLaunchTemplateMetadataOptionsList</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.monitoring"></a>

```go
func Monitoring() DataAwsLaunchTemplateMonitoringList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList">DataAwsLaunchTemplateMonitoringList</a>

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.networkInterfaces"></a>

```go
func NetworkInterfaces() DataAwsLaunchTemplateNetworkInterfacesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList">DataAwsLaunchTemplateNetworkInterfacesList</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.placement"></a>

```go
func Placement() DataAwsLaunchTemplatePlacementList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList">DataAwsLaunchTemplatePlacementList</a>

---

##### `PrivateDnsNameOptions`<sup>Required</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.privateDnsNameOptions"></a>

```go
func PrivateDnsNameOptions() DataAwsLaunchTemplatePrivateDnsNameOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList">DataAwsLaunchTemplatePrivateDnsNameOptionsList</a>

---

##### `RamDiskId`<sup>Required</sup> <a name="RamDiskId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ramDiskId"></a>

```go
func RamDiskId() *string
```

- *Type:* *string

---

##### `SecurityGroupNames`<sup>Required</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.securityGroupNames"></a>

```go
func SecurityGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagSpecifications"></a>

```go
func TagSpecifications() DataAwsLaunchTemplateTagSpecificationsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList">DataAwsLaunchTemplateTagSpecificationsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeouts"></a>

```go
func Timeouts() DataAwsLaunchTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference">DataAwsLaunchTemplateTimeoutsOutputReference</a>

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLaunchTemplateBlockDeviceMappings <a name="DataAwsLaunchTemplateBlockDeviceMappings" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateBlockDeviceMappings {

}
```


### DataAwsLaunchTemplateBlockDeviceMappingsEbs <a name="DataAwsLaunchTemplateBlockDeviceMappingsEbs" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs {

}
```


### DataAwsLaunchTemplateCapacityReservationSpecification <a name="DataAwsLaunchTemplateCapacityReservationSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateCapacityReservationSpecification {

}
```


### DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget <a name="DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {

}
```


### DataAwsLaunchTemplateConfig <a name="DataAwsLaunchTemplateConfig" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
	Name: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#id DataAwsLaunchTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#name DataAwsLaunchTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#tags DataAwsLaunchTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#filter DataAwsLaunchTemplate#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#id DataAwsLaunchTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#name DataAwsLaunchTemplate#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#tags DataAwsLaunchTemplate#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.timeouts"></a>

```go
Timeouts DataAwsLaunchTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#timeouts DataAwsLaunchTemplate#timeouts}

---

### DataAwsLaunchTemplateCpuOptions <a name="DataAwsLaunchTemplateCpuOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateCpuOptions {

}
```


### DataAwsLaunchTemplateCreditSpecification <a name="DataAwsLaunchTemplateCreditSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateCreditSpecification {

}
```


### DataAwsLaunchTemplateElasticGpuSpecifications <a name="DataAwsLaunchTemplateElasticGpuSpecifications" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateElasticGpuSpecifications {

}
```


### DataAwsLaunchTemplateElasticInferenceAccelerator <a name="DataAwsLaunchTemplateElasticInferenceAccelerator" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAccelerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateElasticInferenceAccelerator {

}
```


### DataAwsLaunchTemplateEnclaveOptions <a name="DataAwsLaunchTemplateEnclaveOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateEnclaveOptions {

}
```


### DataAwsLaunchTemplateFilter <a name="DataAwsLaunchTemplateFilter" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#name DataAwsLaunchTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#values DataAwsLaunchTemplate#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#name DataAwsLaunchTemplate#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#values DataAwsLaunchTemplate#values}.

---

### DataAwsLaunchTemplateHibernationOptions <a name="DataAwsLaunchTemplateHibernationOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateHibernationOptions {

}
```


### DataAwsLaunchTemplateIamInstanceProfile <a name="DataAwsLaunchTemplateIamInstanceProfile" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateIamInstanceProfile {

}
```


### DataAwsLaunchTemplateInstanceMarketOptions <a name="DataAwsLaunchTemplateInstanceMarketOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceMarketOptions {

}
```


### DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions <a name="DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions {

}
```


### DataAwsLaunchTemplateInstanceRequirements <a name="DataAwsLaunchTemplateInstanceRequirements" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceRequirements {

}
```


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount {

}
```


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib {

}
```


### DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps <a name="DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps {

}
```


### DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu {

}
```


### DataAwsLaunchTemplateInstanceRequirementsMemoryMib <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib {

}
```


### DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps {

}
```


### DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount {

}
```


### DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb <a name="DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb {

}
```


### DataAwsLaunchTemplateInstanceRequirementsVcpuCount <a name="DataAwsLaunchTemplateInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount {

}
```


### DataAwsLaunchTemplateLicenseSpecification <a name="DataAwsLaunchTemplateLicenseSpecification" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateLicenseSpecification {

}
```


### DataAwsLaunchTemplateMaintenanceOptions <a name="DataAwsLaunchTemplateMaintenanceOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateMaintenanceOptions {

}
```


### DataAwsLaunchTemplateMetadataOptions <a name="DataAwsLaunchTemplateMetadataOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateMetadataOptions {

}
```


### DataAwsLaunchTemplateMonitoring <a name="DataAwsLaunchTemplateMonitoring" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateMonitoring {

}
```


### DataAwsLaunchTemplateNetworkInterfaces <a name="DataAwsLaunchTemplateNetworkInterfaces" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateNetworkInterfaces {

}
```


### DataAwsLaunchTemplatePlacement <a name="DataAwsLaunchTemplatePlacement" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplatePlacement {

}
```


### DataAwsLaunchTemplatePrivateDnsNameOptions <a name="DataAwsLaunchTemplatePrivateDnsNameOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplatePrivateDnsNameOptions {

}
```


### DataAwsLaunchTemplateTagSpecifications <a name="DataAwsLaunchTemplateTagSpecifications" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateTagSpecifications {

}
```


### DataAwsLaunchTemplateTimeouts <a name="DataAwsLaunchTemplateTimeouts" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

&dataawslaunchtemplate.DataAwsLaunchTemplateTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#read DataAwsLaunchTemplate#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template#read DataAwsLaunchTemplate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLaunchTemplateBlockDeviceMappingsEbsList <a name="DataAwsLaunchTemplateBlockDeviceMappingsEbsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateBlockDeviceMappingsEbsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateBlockDeviceMappingsEbsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference <a name="DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs">DataAwsLaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs">DataAwsLaunchTemplateBlockDeviceMappingsEbs</a>

---


### DataAwsLaunchTemplateBlockDeviceMappingsList <a name="DataAwsLaunchTemplateBlockDeviceMappingsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateBlockDeviceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateBlockDeviceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateBlockDeviceMappingsOutputReference <a name="DataAwsLaunchTemplateBlockDeviceMappingsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateBlockDeviceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateBlockDeviceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList">DataAwsLaunchTemplateBlockDeviceMappingsEbsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings">DataAwsLaunchTemplateBlockDeviceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.ebs"></a>

```go
func Ebs() DataAwsLaunchTemplateBlockDeviceMappingsEbsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList">DataAwsLaunchTemplateBlockDeviceMappingsEbsList</a>

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice"></a>

```go
func NoDevice() *string
```

- *Type:* *string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateBlockDeviceMappings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings">DataAwsLaunchTemplateBlockDeviceMappings</a>

---


### DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList <a name="DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArn`<sup>Required</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```go
func CapacityReservationResourceGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---


### DataAwsLaunchTemplateCapacityReservationSpecificationList <a name="DataAwsLaunchTemplateCapacityReservationSpecificationList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateCapacityReservationSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateCapacityReservationSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference <a name="DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateCapacityReservationSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification">DataAwsLaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```go
func CapacityReservationPreference() *string
```

- *Type:* *string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```go
func CapacityReservationTarget() DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateCapacityReservationSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification">DataAwsLaunchTemplateCapacityReservationSpecification</a>

---


### DataAwsLaunchTemplateCpuOptionsList <a name="DataAwsLaunchTemplateCpuOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateCpuOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateCpuOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateCpuOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateCpuOptionsOutputReference <a name="DataAwsLaunchTemplateCpuOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateCpuOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateCpuOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.coreCount">CoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions">DataAwsLaunchTemplateCpuOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.coreCount"></a>

```go
func CoreCount() *f64
```

- *Type:* *f64

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateCpuOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions">DataAwsLaunchTemplateCpuOptions</a>

---


### DataAwsLaunchTemplateCreditSpecificationList <a name="DataAwsLaunchTemplateCreditSpecificationList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateCreditSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateCreditSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateCreditSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateCreditSpecificationOutputReference <a name="DataAwsLaunchTemplateCreditSpecificationOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateCreditSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateCreditSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification">DataAwsLaunchTemplateCreditSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.cpuCredits"></a>

```go
func CpuCredits() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateCreditSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification">DataAwsLaunchTemplateCreditSpecification</a>

---


### DataAwsLaunchTemplateElasticGpuSpecificationsList <a name="DataAwsLaunchTemplateElasticGpuSpecificationsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateElasticGpuSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateElasticGpuSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference <a name="DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateElasticGpuSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecifications">DataAwsLaunchTemplateElasticGpuSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateElasticGpuSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticGpuSpecifications">DataAwsLaunchTemplateElasticGpuSpecifications</a>

---


### DataAwsLaunchTemplateElasticInferenceAcceleratorList <a name="DataAwsLaunchTemplateElasticInferenceAcceleratorList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateElasticInferenceAcceleratorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateElasticInferenceAcceleratorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference <a name="DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAccelerator">DataAwsLaunchTemplateElasticInferenceAccelerator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateElasticInferenceAccelerator
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateElasticInferenceAccelerator">DataAwsLaunchTemplateElasticInferenceAccelerator</a>

---


### DataAwsLaunchTemplateEnclaveOptionsList <a name="DataAwsLaunchTemplateEnclaveOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateEnclaveOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateEnclaveOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateEnclaveOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateEnclaveOptionsOutputReference <a name="DataAwsLaunchTemplateEnclaveOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateEnclaveOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateEnclaveOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions">DataAwsLaunchTemplateEnclaveOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateEnclaveOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions">DataAwsLaunchTemplateEnclaveOptions</a>

---


### DataAwsLaunchTemplateFilterList <a name="DataAwsLaunchTemplateFilterList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsLaunchTemplateFilterOutputReference <a name="DataAwsLaunchTemplateFilterOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsLaunchTemplateHibernationOptionsList <a name="DataAwsLaunchTemplateHibernationOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateHibernationOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateHibernationOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateHibernationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateHibernationOptionsOutputReference <a name="DataAwsLaunchTemplateHibernationOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateHibernationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateHibernationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.configured">Configured</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions">DataAwsLaunchTemplateHibernationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.configured"></a>

```go
func Configured() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateHibernationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions">DataAwsLaunchTemplateHibernationOptions</a>

---


### DataAwsLaunchTemplateIamInstanceProfileList <a name="DataAwsLaunchTemplateIamInstanceProfileList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateIamInstanceProfileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateIamInstanceProfileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateIamInstanceProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateIamInstanceProfileOutputReference <a name="DataAwsLaunchTemplateIamInstanceProfileOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateIamInstanceProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateIamInstanceProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile">DataAwsLaunchTemplateIamInstanceProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateIamInstanceProfile
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile">DataAwsLaunchTemplateIamInstanceProfile</a>

---


### DataAwsLaunchTemplateInstanceMarketOptionsList <a name="DataAwsLaunchTemplateInstanceMarketOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceMarketOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceMarketOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceMarketOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceMarketOptionsOutputReference <a name="DataAwsLaunchTemplateInstanceMarketOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceMarketOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceMarketOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.marketType">MarketType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions">DataAwsLaunchTemplateInstanceMarketOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MarketType`<sup>Required</sup> <a name="MarketType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.marketType"></a>

```go
func MarketType() *string
```

- *Type:* *string

---

##### `SpotOptions`<sup>Required</sup> <a name="SpotOptions" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions"></a>

```go
func SpotOptions() DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceMarketOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions">DataAwsLaunchTemplateInstanceMarketOptions</a>

---


### DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList <a name="DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference <a name="DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice">MaxPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType">SpotInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil">ValidUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockDurationMinutes`<sup>Required</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes"></a>

```go
func BlockDurationMinutes() *f64
```

- *Type:* *f64

---

##### `InstanceInterruptionBehavior`<sup>Required</sup> <a name="InstanceInterruptionBehavior" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```go
func InstanceInterruptionBehavior() *string
```

- *Type:* *string

---

##### `MaxPrice`<sup>Required</sup> <a name="MaxPrice" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice"></a>

```go
func MaxPrice() *string
```

- *Type:* *string

---

##### `SpotInstanceType`<sup>Required</sup> <a name="SpotInstanceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType"></a>

```go
func SpotInstanceType() *string
```

- *Type:* *string

---

##### `ValidUntil`<sup>Required</sup> <a name="ValidUntil" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil"></a>

```go
func ValidUntil() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions</a>

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount</a>

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList <a name="DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### DataAwsLaunchTemplateInstanceRequirementsList <a name="DataAwsLaunchTemplateInstanceRequirementsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceRequirementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryMibList <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryMibList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsMemoryMibList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceRequirementsMemoryMibList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib">DataAwsLaunchTemplateInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceRequirementsMemoryMib
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib">DataAwsLaunchTemplateInstanceRequirementsMemoryMib</a>

---


### DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps">DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps">DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a>

---


### DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---


### DataAwsLaunchTemplateInstanceRequirementsOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames">AcceleratorNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">AcceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.bareMetal">BareMetal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance">BurstablePerformance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers">CpuManufacturers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations">InstanceGenerations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorage">LocalStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes">LocalStorageTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu">MemoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryMib">MemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsMemoryMibList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbps">NetworkBandwidthGbps</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList">DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount">VcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList">DataAwsLaunchTemplateInstanceRequirementsVcpuCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements">DataAwsLaunchTemplateInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList</a>

---

##### `AcceleratorManufacturers`<sup>Required</sup> <a name="AcceleratorManufacturers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```go
func AcceleratorManufacturers() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorNames`<sup>Required</sup> <a name="AcceleratorNames" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```go
func AcceleratorNames() *[]*string
```

- *Type:* *[]*string

---

##### `AcceleratorTotalMemoryMib`<sup>Required</sup> <a name="AcceleratorTotalMemoryMib" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```go
func AcceleratorTotalMemoryMib() DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList</a>

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```go
func AcceleratorTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```go
func AllowedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `BareMetal`<sup>Required</sup> <a name="BareMetal" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.bareMetal"></a>

```go
func BareMetal() *string
```

- *Type:* *string

---

##### `BaselineEbsBandwidthMbps`<sup>Required</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```go
func BaselineEbsBandwidthMbps() DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList</a>

---

##### `BurstablePerformance`<sup>Required</sup> <a name="BurstablePerformance" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```go
func BurstablePerformance() *string
```

- *Type:* *string

---

##### `CpuManufacturers`<sup>Required</sup> <a name="CpuManufacturers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```go
func CpuManufacturers() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```go
func ExcludedInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceGenerations`<sup>Required</sup> <a name="InstanceGenerations" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```go
func InstanceGenerations() *[]*string
```

- *Type:* *[]*string

---

##### `LocalStorage`<sup>Required</sup> <a name="LocalStorage" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorage"></a>

```go
func LocalStorage() *string
```

- *Type:* *string

---

##### `LocalStorageTypes`<sup>Required</sup> <a name="LocalStorageTypes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```go
func LocalStorageTypes() *[]*string
```

- *Type:* *[]*string

---

##### `MemoryGibPerVcpu`<sup>Required</sup> <a name="MemoryGibPerVcpu" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```go
func MemoryGibPerVcpu() DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList</a>

---

##### `MemoryMib`<sup>Required</sup> <a name="MemoryMib" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryMib"></a>

```go
func MemoryMib() DataAwsLaunchTemplateInstanceRequirementsMemoryMibList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsMemoryMibList</a>

---

##### `NetworkBandwidthGbps`<sup>Required</sup> <a name="NetworkBandwidthGbps" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```go
func NetworkBandwidthGbps() DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList">DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList</a>

---

##### `NetworkInterfaceCount`<sup>Required</sup> <a name="NetworkInterfaceCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```go
func NetworkInterfaceCount() DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList</a>

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```go
func OnDemandMaxPricePercentageOverLowestPrice() *f64
```

- *Type:* *f64

---

##### `RequireHibernateSupport`<sup>Required</sup> <a name="RequireHibernateSupport" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```go
func RequireHibernateSupport() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```go
func SpotMaxPricePercentageOverLowestPrice() *f64
```

- *Type:* *f64

---

##### `TotalLocalStorageGb`<sup>Required</sup> <a name="TotalLocalStorageGb" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```go
func TotalLocalStorageGb() DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList</a>

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount"></a>

```go
func VcpuCount() DataAwsLaunchTemplateInstanceRequirementsVcpuCountList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList">DataAwsLaunchTemplateInstanceRequirementsVcpuCountList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceRequirements
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements">DataAwsLaunchTemplateInstanceRequirements</a>

---


### DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList <a name="DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---


### DataAwsLaunchTemplateInstanceRequirementsVcpuCountList <a name="DataAwsLaunchTemplateInstanceRequirementsVcpuCountList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsVcpuCountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateInstanceRequirementsVcpuCountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount">DataAwsLaunchTemplateInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateInstanceRequirementsVcpuCount
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount">DataAwsLaunchTemplateInstanceRequirementsVcpuCount</a>

---


### DataAwsLaunchTemplateLicenseSpecificationList <a name="DataAwsLaunchTemplateLicenseSpecificationList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateLicenseSpecificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateLicenseSpecificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateLicenseSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateLicenseSpecificationOutputReference <a name="DataAwsLaunchTemplateLicenseSpecificationOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateLicenseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateLicenseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification">DataAwsLaunchTemplateLicenseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn"></a>

```go
func LicenseConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateLicenseSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification">DataAwsLaunchTemplateLicenseSpecification</a>

---


### DataAwsLaunchTemplateMaintenanceOptionsList <a name="DataAwsLaunchTemplateMaintenanceOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateMaintenanceOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateMaintenanceOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateMaintenanceOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateMaintenanceOptionsOutputReference <a name="DataAwsLaunchTemplateMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateMaintenanceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateMaintenanceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery">AutoRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions">DataAwsLaunchTemplateMaintenanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRecovery`<sup>Required</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```go
func AutoRecovery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateMaintenanceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions">DataAwsLaunchTemplateMaintenanceOptions</a>

---


### DataAwsLaunchTemplateMetadataOptionsList <a name="DataAwsLaunchTemplateMetadataOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateMetadataOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateMetadataOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateMetadataOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateMetadataOptionsOutputReference <a name="DataAwsLaunchTemplateMetadataOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions">DataAwsLaunchTemplateMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() *string
```

- *Type:* *string

---

##### `HttpProtocolIpv6`<sup>Required</sup> <a name="HttpProtocolIpv6" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```go
func HttpProtocolIpv6() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```go
func InstanceMetadataTags() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions">DataAwsLaunchTemplateMetadataOptions</a>

---


### DataAwsLaunchTemplateMonitoringList <a name="DataAwsLaunchTemplateMonitoringList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateMonitoringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateMonitoringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateMonitoringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateMonitoringOutputReference <a name="DataAwsLaunchTemplateMonitoringOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring">DataAwsLaunchTemplateMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateMonitoring
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring">DataAwsLaunchTemplateMonitoring</a>

---


### DataAwsLaunchTemplateNetworkInterfacesList <a name="DataAwsLaunchTemplateNetworkInterfacesList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateNetworkInterfacesOutputReference <a name="DataAwsLaunchTemplateNetworkInterfacesOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress">AssociateCarrierIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.interfaceType">InterfaceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount">Ipv4AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex">NetworkCardIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces">DataAwsLaunchTemplateNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociateCarrierIpAddress`<sup>Required</sup> <a name="AssociateCarrierIpAddress" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```go
func AssociateCarrierIpAddress() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex"></a>

```go
func DeviceIndex() *f64
```

- *Type:* *f64

---

##### `InterfaceType`<sup>Required</sup> <a name="InterfaceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.interfaceType"></a>

```go
func InterfaceType() *string
```

- *Type:* *string

---

##### `Ipv4AddressCount`<sup>Required</sup> <a name="Ipv4AddressCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount"></a>

```go
func Ipv4AddressCount() *f64
```

- *Type:* *f64

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses"></a>

```go
func Ipv4Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4PrefixCount`<sup>Required</sup> <a name="Ipv4PrefixCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount"></a>

```go
func Ipv4PrefixCount() *f64
```

- *Type:* *f64

---

##### `Ipv4Prefixes`<sup>Required</sup> <a name="Ipv4Prefixes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes"></a>

```go
func Ipv4Prefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```go
func Ipv6AddressCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6PrefixCount`<sup>Required</sup> <a name="Ipv6PrefixCount" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount"></a>

```go
func Ipv6PrefixCount() *f64
```

- *Type:* *f64

---

##### `Ipv6Prefixes`<sup>Required</sup> <a name="Ipv6Prefixes" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes"></a>

```go
func Ipv6Prefixes() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkCardIndex`<sup>Required</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```go
func NetworkCardIndex() *f64
```

- *Type:* *f64

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateNetworkInterfaces
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces">DataAwsLaunchTemplateNetworkInterfaces</a>

---


### DataAwsLaunchTemplatePlacementList <a name="DataAwsLaunchTemplatePlacementList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplatePlacementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplatePlacementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplatePlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplatePlacementOutputReference <a name="DataAwsLaunchTemplatePlacementOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplatePlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplatePlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.affinity">Affinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.partitionNumber">PartitionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.spreadDomain">SpreadDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement">DataAwsLaunchTemplatePlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Affinity`<sup>Required</sup> <a name="Affinity" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.affinity"></a>

```go
func Affinity() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostResourceGroupArn"></a>

```go
func HostResourceGroupArn() *string
```

- *Type:* *string

---

##### `PartitionNumber`<sup>Required</sup> <a name="PartitionNumber" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.partitionNumber"></a>

```go
func PartitionNumber() *f64
```

- *Type:* *f64

---

##### `SpreadDomain`<sup>Required</sup> <a name="SpreadDomain" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.spreadDomain"></a>

```go
func SpreadDomain() *string
```

- *Type:* *string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplatePlacement
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement">DataAwsLaunchTemplatePlacement</a>

---


### DataAwsLaunchTemplatePrivateDnsNameOptionsList <a name="DataAwsLaunchTemplatePrivateDnsNameOptionsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplatePrivateDnsNameOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplatePrivateDnsNameOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference <a name="DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType">HostnameType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions">DataAwsLaunchTemplatePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```go
func EnableResourceNameDnsAaaaRecord() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```go
func EnableResourceNameDnsARecord() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```go
func HostnameType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplatePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions">DataAwsLaunchTemplatePrivateDnsNameOptions</a>

---


### DataAwsLaunchTemplateTagSpecificationsList <a name="DataAwsLaunchTemplateTagSpecificationsList" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateTagSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLaunchTemplateTagSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.get"></a>

```go
func Get(index *f64) DataAwsLaunchTemplateTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLaunchTemplateTagSpecificationsOutputReference <a name="DataAwsLaunchTemplateTagSpecificationsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateTagSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLaunchTemplateTagSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications">DataAwsLaunchTemplateTagSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLaunchTemplateTagSpecifications
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications">DataAwsLaunchTemplateTagSpecifications</a>

---


### DataAwsLaunchTemplateTimeoutsOutputReference <a name="DataAwsLaunchTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslaunchtemplate"

dataawslaunchtemplate.NewDataAwsLaunchTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsLaunchTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



