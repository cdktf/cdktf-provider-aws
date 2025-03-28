# `dataAwsVpcIpams` Submodule <a name="`dataAwsVpcIpams` Submodule" id="@cdktf/provider-aws.dataAwsVpcIpams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpams <a name="DataAwsVpcIpams" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/vpc_ipams aws_vpc_ipams}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.NewDataAwsVpcIpams(scope Construct, id *string, config DataAwsVpcIpamsConfig) DataAwsVpcIpams
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig">DataAwsVpcIpamsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig">DataAwsVpcIpamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.resetIpamIds">ResetIpamIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetIpamIds` <a name="ResetIpamIds" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.resetIpamIds"></a>

```go
func ResetIpamIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpcIpams resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.DataAwsVpcIpams_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.DataAwsVpcIpams_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.DataAwsVpcIpams_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.DataAwsVpcIpams_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsVpcIpams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsVpcIpams to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsVpcIpams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/vpc_ipams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpcIpams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList">DataAwsVpcIpamsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.ipams">Ipams</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList">DataAwsVpcIpamsIpamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.ipamIdsInput">IpamIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.ipamIds">IpamIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.filter"></a>

```go
func Filter() DataAwsVpcIpamsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList">DataAwsVpcIpamsFilterList</a>

---

##### `Ipams`<sup>Required</sup> <a name="Ipams" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.ipams"></a>

```go
func Ipams() DataAwsVpcIpamsIpamsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList">DataAwsVpcIpamsIpamsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IpamIdsInput`<sup>Optional</sup> <a name="IpamIdsInput" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.ipamIdsInput"></a>

```go
func IpamIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpamIds`<sup>Required</sup> <a name="IpamIds" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.ipamIds"></a>

```go
func IpamIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpams.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamsConfig <a name="DataAwsVpcIpamsConfig" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

&dataawsvpcipams.DataAwsVpcIpamsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	IpamIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.ipamIds">IpamIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/vpc_ipams#ipam_ids DataAwsVpcIpams#ipam_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/vpc_ipams#filter DataAwsVpcIpams#filter}

---

##### `IpamIds`<sup>Optional</sup> <a name="IpamIds" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsConfig.property.ipamIds"></a>

```go
IpamIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/vpc_ipams#ipam_ids DataAwsVpcIpams#ipam_ids}.

---

### DataAwsVpcIpamsFilter <a name="DataAwsVpcIpamsFilter" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

&dataawsvpcipams.DataAwsVpcIpamsFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/vpc_ipams#name DataAwsVpcIpams#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/vpc_ipams#values DataAwsVpcIpams#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/vpc_ipams#name DataAwsVpcIpams#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/vpc_ipams#values DataAwsVpcIpams#values}.

---

### DataAwsVpcIpamsIpams <a name="DataAwsVpcIpamsIpams" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

&dataawsvpcipams.DataAwsVpcIpamsIpams {

}
```


### DataAwsVpcIpamsIpamsOperatingRegions <a name="DataAwsVpcIpamsIpamsOperatingRegions" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

&dataawsvpcipams.DataAwsVpcIpamsIpamsOperatingRegions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamsFilterList <a name="DataAwsVpcIpamsFilterList" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.NewDataAwsVpcIpamsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsVpcIpamsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.get"></a>

```go
func Get(index *f64) DataAwsVpcIpamsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsVpcIpamsFilterOutputReference <a name="DataAwsVpcIpamsFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.NewDataAwsVpcIpamsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsVpcIpamsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsVpcIpamsIpamsList <a name="DataAwsVpcIpamsIpamsList" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.NewDataAwsVpcIpamsIpamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsVpcIpamsIpamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.get"></a>

```go
func Get(index *f64) DataAwsVpcIpamsIpamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsVpcIpamsIpamsOperatingRegionsList <a name="DataAwsVpcIpamsIpamsOperatingRegionsList" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.NewDataAwsVpcIpamsIpamsOperatingRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsVpcIpamsIpamsOperatingRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.get"></a>

```go
func Get(index *f64) DataAwsVpcIpamsIpamsOperatingRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsVpcIpamsIpamsOperatingRegionsOutputReference <a name="DataAwsVpcIpamsIpamsOperatingRegionsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.NewDataAwsVpcIpamsIpamsOperatingRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsVpcIpamsIpamsOperatingRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegions">DataAwsVpcIpamsIpamsOperatingRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsVpcIpamsIpamsOperatingRegions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegions">DataAwsVpcIpamsIpamsOperatingRegions</a>

---


### DataAwsVpcIpamsIpamsOutputReference <a name="DataAwsVpcIpamsIpamsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsvpcipams"

dataawsvpcipams.NewDataAwsVpcIpamsIpamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsVpcIpamsIpamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.defaultResourceDiscoveryAssociationId">DefaultResourceDiscoveryAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.defaultResourceDiscoveryId">DefaultResourceDiscoveryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.enablePrivateGua">EnablePrivateGua</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.ipamRegion">IpamRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.operatingRegions">OperatingRegions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList">DataAwsVpcIpamsIpamsOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.privateDefaultScopeId">PrivateDefaultScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.publicDefaultScopeId">PublicDefaultScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.resourceDiscoveryAssociationCount">ResourceDiscoveryAssociationCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.scopeCount">ScopeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpams">DataAwsVpcIpamsIpams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DefaultResourceDiscoveryAssociationId`<sup>Required</sup> <a name="DefaultResourceDiscoveryAssociationId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.defaultResourceDiscoveryAssociationId"></a>

```go
func DefaultResourceDiscoveryAssociationId() *string
```

- *Type:* *string

---

##### `DefaultResourceDiscoveryId`<sup>Required</sup> <a name="DefaultResourceDiscoveryId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.defaultResourceDiscoveryId"></a>

```go
func DefaultResourceDiscoveryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnablePrivateGua`<sup>Required</sup> <a name="EnablePrivateGua" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.enablePrivateGua"></a>

```go
func EnablePrivateGua() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpamRegion`<sup>Required</sup> <a name="IpamRegion" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.ipamRegion"></a>

```go
func IpamRegion() *string
```

- *Type:* *string

---

##### `OperatingRegions`<sup>Required</sup> <a name="OperatingRegions" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.operatingRegions"></a>

```go
func OperatingRegions() DataAwsVpcIpamsIpamsOperatingRegionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOperatingRegionsList">DataAwsVpcIpamsIpamsOperatingRegionsList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PrivateDefaultScopeId`<sup>Required</sup> <a name="PrivateDefaultScopeId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.privateDefaultScopeId"></a>

```go
func PrivateDefaultScopeId() *string
```

- *Type:* *string

---

##### `PublicDefaultScopeId`<sup>Required</sup> <a name="PublicDefaultScopeId" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.publicDefaultScopeId"></a>

```go
func PublicDefaultScopeId() *string
```

- *Type:* *string

---

##### `ResourceDiscoveryAssociationCount`<sup>Required</sup> <a name="ResourceDiscoveryAssociationCount" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.resourceDiscoveryAssociationCount"></a>

```go
func ResourceDiscoveryAssociationCount() *f64
```

- *Type:* *f64

---

##### `ScopeCount`<sup>Required</sup> <a name="ScopeCount" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.scopeCount"></a>

```go
func ScopeCount() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsVpcIpamsIpams
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpams.DataAwsVpcIpamsIpams">DataAwsVpcIpamsIpams</a>

---



