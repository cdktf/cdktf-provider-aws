# `dataAwsResourceexplorer2Search` Submodule <a name="`dataAwsResourceexplorer2Search` Submodule" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResourceexplorer2Search <a name="DataAwsResourceexplorer2Search" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/resourceexplorer2_search aws_resourceexplorer2_search}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.NewDataAwsResourceexplorer2Search(scope Construct, id *string, config DataAwsResourceexplorer2SearchConfig) DataAwsResourceexplorer2Search
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig">DataAwsResourceexplorer2SearchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig">DataAwsResourceexplorer2SearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetViewArn">ResetViewArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetViewArn` <a name="ResetViewArn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetViewArn"></a>

```go
func ResetViewArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsResourceexplorer2Search resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.DataAwsResourceexplorer2Search_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.DataAwsResourceexplorer2Search_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.DataAwsResourceexplorer2Search_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.DataAwsResourceexplorer2Search_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsResourceexplorer2Search resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsResourceexplorer2Search to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsResourceexplorer2Search that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/resourceexplorer2_search#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsResourceexplorer2Search to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resourceCount">ResourceCount</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList">DataAwsResourceexplorer2SearchResourceCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList">DataAwsResourceexplorer2SearchResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArnInput">ViewArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArn">ViewArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceCount`<sup>Required</sup> <a name="ResourceCount" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resourceCount"></a>

```go
func ResourceCount() DataAwsResourceexplorer2SearchResourceCountList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList">DataAwsResourceexplorer2SearchResourceCountList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resources"></a>

```go
func Resources() DataAwsResourceexplorer2SearchResourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList">DataAwsResourceexplorer2SearchResourcesList</a>

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `ViewArnInput`<sup>Optional</sup> <a name="ViewArnInput" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArnInput"></a>

```go
func ViewArnInput() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `ViewArn`<sup>Required</sup> <a name="ViewArn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArn"></a>

```go
func ViewArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResourceexplorer2SearchConfig <a name="DataAwsResourceexplorer2SearchConfig" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

&dataawsresourceexplorer2search.DataAwsResourceexplorer2SearchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	QueryString: *string,
	ViewArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.queryString">QueryString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.viewArn">ViewArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}.

---

##### `ViewArn`<sup>Optional</sup> <a name="ViewArn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.viewArn"></a>

```go
ViewArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}.

---

### DataAwsResourceexplorer2SearchResourceCount <a name="DataAwsResourceexplorer2SearchResourceCount" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

&dataawsresourceexplorer2search.DataAwsResourceexplorer2SearchResourceCount {

}
```


### DataAwsResourceexplorer2SearchResources <a name="DataAwsResourceexplorer2SearchResources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

&dataawsresourceexplorer2search.DataAwsResourceexplorer2SearchResources {

}
```


### DataAwsResourceexplorer2SearchResourcesProperties <a name="DataAwsResourceexplorer2SearchResourcesProperties" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

&dataawsresourceexplorer2search.DataAwsResourceexplorer2SearchResourcesProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResourceexplorer2SearchResourceCountList <a name="DataAwsResourceexplorer2SearchResourceCountList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.NewDataAwsResourceexplorer2SearchResourceCountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsResourceexplorer2SearchResourceCountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get"></a>

```go
func Get(index *f64) DataAwsResourceexplorer2SearchResourceCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsResourceexplorer2SearchResourceCountOutputReference <a name="DataAwsResourceexplorer2SearchResourceCountOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.NewDataAwsResourceexplorer2SearchResourceCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsResourceexplorer2SearchResourceCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.complete">Complete</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.totalResources">TotalResources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount">DataAwsResourceexplorer2SearchResourceCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Complete`<sup>Required</sup> <a name="Complete" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.complete"></a>

```go
func Complete() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TotalResources`<sup>Required</sup> <a name="TotalResources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.totalResources"></a>

```go
func TotalResources() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsResourceexplorer2SearchResourceCount
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount">DataAwsResourceexplorer2SearchResourceCount</a>

---


### DataAwsResourceexplorer2SearchResourcesList <a name="DataAwsResourceexplorer2SearchResourcesList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.NewDataAwsResourceexplorer2SearchResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsResourceexplorer2SearchResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get"></a>

```go
func Get(index *f64) DataAwsResourceexplorer2SearchResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsResourceexplorer2SearchResourcesOutputReference <a name="DataAwsResourceexplorer2SearchResourcesOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.NewDataAwsResourceexplorer2SearchResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsResourceexplorer2SearchResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.lastReportedAt">LastReportedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.owningAccountId">OwningAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList">DataAwsResourceexplorer2SearchResourcesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources">DataAwsResourceexplorer2SearchResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `LastReportedAt`<sup>Required</sup> <a name="LastReportedAt" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.lastReportedAt"></a>

```go
func LastReportedAt() *string
```

- *Type:* *string

---

##### `OwningAccountId`<sup>Required</sup> <a name="OwningAccountId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.owningAccountId"></a>

```go
func OwningAccountId() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.properties"></a>

```go
func Properties() DataAwsResourceexplorer2SearchResourcesPropertiesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList">DataAwsResourceexplorer2SearchResourcesPropertiesList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsResourceexplorer2SearchResources
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources">DataAwsResourceexplorer2SearchResources</a>

---


### DataAwsResourceexplorer2SearchResourcesPropertiesList <a name="DataAwsResourceexplorer2SearchResourcesPropertiesList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.NewDataAwsResourceexplorer2SearchResourcesPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsResourceexplorer2SearchResourcesPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference <a name="DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsresourceexplorer2search"

dataawsresourceexplorer2search.NewDataAwsResourceexplorer2SearchResourcesPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.lastReportedAt">LastReportedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties">DataAwsResourceexplorer2SearchResourcesProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `LastReportedAt`<sup>Required</sup> <a name="LastReportedAt" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.lastReportedAt"></a>

```go
func LastReportedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsResourceexplorer2SearchResourcesProperties
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties">DataAwsResourceexplorer2SearchResourcesProperties</a>

---



