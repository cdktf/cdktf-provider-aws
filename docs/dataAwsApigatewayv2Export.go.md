# `dataAwsApigatewayv2Export` Submodule <a name="`dataAwsApigatewayv2Export` Submodule" id="@cdktf/provider-aws.dataAwsApigatewayv2Export"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApigatewayv2Export <a name="DataAwsApigatewayv2Export" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export aws_apigatewayv2_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayv2export"

dataawsapigatewayv2export.NewDataAwsApigatewayv2Export(scope Construct, id *string, config DataAwsApigatewayv2ExportConfig) DataAwsApigatewayv2Export
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig">DataAwsApigatewayv2ExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig">DataAwsApigatewayv2ExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetExportVersion">ResetExportVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetIncludeExtensions">ResetIncludeExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetStageName">ResetStageName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetExportVersion` <a name="ResetExportVersion" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetExportVersion"></a>

```go
func ResetExportVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeExtensions` <a name="ResetIncludeExtensions" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetIncludeExtensions"></a>

```go
func ResetIncludeExtensions()
```

##### `ResetStageName` <a name="ResetStageName" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetStageName"></a>

```go
func ResetStageName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayv2export"

dataawsapigatewayv2export.DataAwsApigatewayv2Export_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayv2export"

dataawsapigatewayv2export.DataAwsApigatewayv2Export_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayv2export"

dataawsapigatewayv2export.DataAwsApigatewayv2Export_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersionInput">ExportVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensionsInput">IncludeExtensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputTypeInput">OutputTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specificationInput">SpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageNameInput">StageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersion">ExportVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensions">IncludeExtensions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputType">OutputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specification">Specification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageName">StageName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `ExportVersionInput`<sup>Optional</sup> <a name="ExportVersionInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersionInput"></a>

```go
func ExportVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeExtensionsInput`<sup>Optional</sup> <a name="IncludeExtensionsInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensionsInput"></a>

```go
func IncludeExtensionsInput() interface{}
```

- *Type:* interface{}

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputTypeInput"></a>

```go
func OutputTypeInput() *string
```

- *Type:* *string

---

##### `SpecificationInput`<sup>Optional</sup> <a name="SpecificationInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specificationInput"></a>

```go
func SpecificationInput() *string
```

- *Type:* *string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageNameInput"></a>

```go
func StageNameInput() *string
```

- *Type:* *string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `ExportVersion`<sup>Required</sup> <a name="ExportVersion" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersion"></a>

```go
func ExportVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeExtensions`<sup>Required</sup> <a name="IncludeExtensions" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensions"></a>

```go
func IncludeExtensions() interface{}
```

- *Type:* interface{}

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputType"></a>

```go
func OutputType() *string
```

- *Type:* *string

---

##### `Specification`<sup>Required</sup> <a name="Specification" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specification"></a>

```go
func Specification() *string
```

- *Type:* *string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageName"></a>

```go
func StageName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApigatewayv2ExportConfig <a name="DataAwsApigatewayv2ExportConfig" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayv2export"

&dataawsapigatewayv2export.DataAwsApigatewayv2ExportConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiId: *string,
	OutputType: *string,
	Specification: *string,
	ExportVersion: *string,
	Id: *string,
	IncludeExtensions: interface{},
	StageName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.apiId">ApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.outputType">OutputType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.specification">Specification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.exportVersion">ExportVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#id DataAwsApigatewayv2Export#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.includeExtensions">IncludeExtensions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.stageName">StageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}.

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.outputType"></a>

```go
OutputType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}.

---

##### `Specification`<sup>Required</sup> <a name="Specification" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.specification"></a>

```go
Specification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}.

---

##### `ExportVersion`<sup>Optional</sup> <a name="ExportVersion" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.exportVersion"></a>

```go
ExportVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#id DataAwsApigatewayv2Export#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeExtensions`<sup>Optional</sup> <a name="IncludeExtensions" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.includeExtensions"></a>

```go
IncludeExtensions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}.

---

##### `StageName`<sup>Optional</sup> <a name="StageName" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.stageName"></a>

```go
StageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}.

---



