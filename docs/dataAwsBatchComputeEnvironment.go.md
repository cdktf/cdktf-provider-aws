# `dataAwsBatchComputeEnvironment` Submodule <a name="`dataAwsBatchComputeEnvironment` Submodule" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBatchComputeEnvironment <a name="DataAwsBatchComputeEnvironment" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/batch_compute_environment aws_batch_compute_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbatchcomputeenvironment"

dataawsbatchcomputeenvironment.NewDataAwsBatchComputeEnvironment(scope Construct, id *string, config DataAwsBatchComputeEnvironmentConfig) DataAwsBatchComputeEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig">DataAwsBatchComputeEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig">DataAwsBatchComputeEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBatchComputeEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbatchcomputeenvironment"

dataawsbatchcomputeenvironment.DataAwsBatchComputeEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbatchcomputeenvironment"

dataawsbatchcomputeenvironment.DataAwsBatchComputeEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbatchcomputeenvironment"

dataawsbatchcomputeenvironment.DataAwsBatchComputeEnvironment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbatchcomputeenvironment"

dataawsbatchcomputeenvironment.DataAwsBatchComputeEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsBatchComputeEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsBatchComputeEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsBatchComputeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/batch_compute_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBatchComputeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.ecsClusterArn">EcsClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList">DataAwsBatchComputeEnvironmentUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EcsClusterArn`<sup>Required</sup> <a name="EcsClusterArn" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.ecsClusterArn"></a>

```go
func EcsClusterArn() *string
```

- *Type:* *string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.serviceRole"></a>

```go
func ServiceRole() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.updatePolicy"></a>

```go
func UpdatePolicy() DataAwsBatchComputeEnvironmentUpdatePolicyList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList">DataAwsBatchComputeEnvironmentUpdatePolicyList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBatchComputeEnvironmentConfig <a name="DataAwsBatchComputeEnvironmentConfig" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbatchcomputeenvironment"

&dataawsbatchcomputeenvironment.DataAwsBatchComputeEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Region: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/batch_compute_environment#name DataAwsBatchComputeEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/batch_compute_environment#id DataAwsBatchComputeEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/batch_compute_environment#tags DataAwsBatchComputeEnvironment#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/batch_compute_environment#name DataAwsBatchComputeEnvironment#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/batch_compute_environment#id DataAwsBatchComputeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/batch_compute_environment#region DataAwsBatchComputeEnvironment#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/batch_compute_environment#tags DataAwsBatchComputeEnvironment#tags}.

---

### DataAwsBatchComputeEnvironmentUpdatePolicy <a name="DataAwsBatchComputeEnvironmentUpdatePolicy" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbatchcomputeenvironment"

&dataawsbatchcomputeenvironment.DataAwsBatchComputeEnvironmentUpdatePolicy {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBatchComputeEnvironmentUpdatePolicyList <a name="DataAwsBatchComputeEnvironmentUpdatePolicyList" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbatchcomputeenvironment"

dataawsbatchcomputeenvironment.NewDataAwsBatchComputeEnvironmentUpdatePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBatchComputeEnvironmentUpdatePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.get"></a>

```go
func Get(index *f64) DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference <a name="DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbatchcomputeenvironment"

dataawsbatchcomputeenvironment.NewDataAwsBatchComputeEnvironmentUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes">JobExecutionTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate">TerminateJobsOnUpdate</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicy">DataAwsBatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobExecutionTimeoutMinutes`<sup>Required</sup> <a name="JobExecutionTimeoutMinutes" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes"></a>

```go
func JobExecutionTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `TerminateJobsOnUpdate`<sup>Required</sup> <a name="TerminateJobsOnUpdate" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate"></a>

```go
func TerminateJobsOnUpdate() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBatchComputeEnvironmentUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentUpdatePolicy">DataAwsBatchComputeEnvironmentUpdatePolicy</a>

---



