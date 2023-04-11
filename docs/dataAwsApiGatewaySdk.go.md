# `dataAwsApiGatewaySdk` Submodule <a name="`dataAwsApiGatewaySdk` Submodule" id="@cdktf/provider-aws.dataAwsApiGatewaySdk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewaySdk <a name="DataAwsApiGatewaySdk" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk aws_api_gateway_sdk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewaysdk"

dataawsapigatewaysdk.NewDataAwsApiGatewaySdk(scope Construct, id *string, config DataAwsApiGatewaySdkConfig) DataAwsApiGatewaySdk
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig">DataAwsApiGatewaySdkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig">DataAwsApiGatewaySdkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetId"></a>

```go
func ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetParameters"></a>

```go
func ResetParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewaysdk"

dataawsapigatewaysdk.DataAwsApiGatewaySdk_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewaysdk"

dataawsapigatewaysdk.DataAwsApiGatewaySdk_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewaysdk"

dataawsapigatewaysdk.DataAwsApiGatewaySdk_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.restApiIdInput">RestApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.sdkTypeInput">SdkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.stageNameInput">StageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.sdkType">SdkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.stageName">StageName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.restApiIdInput"></a>

```go
func RestApiIdInput() *string
```

- *Type:* *string

---

##### `SdkTypeInput`<sup>Optional</sup> <a name="SdkTypeInput" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.sdkTypeInput"></a>

```go
func SdkTypeInput() *string
```

- *Type:* *string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.stageNameInput"></a>

```go
func StageNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

##### `SdkType`<sup>Required</sup> <a name="SdkType" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.sdkType"></a>

```go
func SdkType() *string
```

- *Type:* *string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.stageName"></a>

```go
func StageName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewaySdkConfig <a name="DataAwsApiGatewaySdkConfig" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewaysdk"

&dataawsapigatewaysdk.DataAwsApiGatewaySdkConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RestApiId: *string,
	SdkType: *string,
	StageName: *string,
	Id: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.restApiId">RestApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#rest_api_id DataAwsApiGatewaySdk#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.sdkType">SdkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#sdk_type DataAwsApiGatewaySdk#sdk_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.stageName">StageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#stage_name DataAwsApiGatewaySdk#stage_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#id DataAwsApiGatewaySdk#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#parameters DataAwsApiGatewaySdk#parameters}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.restApiId"></a>

```go
RestApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#rest_api_id DataAwsApiGatewaySdk#rest_api_id}.

---

##### `SdkType`<sup>Required</sup> <a name="SdkType" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.sdkType"></a>

```go
SdkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#sdk_type DataAwsApiGatewaySdk#sdk_type}.

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.stageName"></a>

```go
StageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#stage_name DataAwsApiGatewaySdk#stage_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#id DataAwsApiGatewaySdk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#parameters DataAwsApiGatewaySdk#parameters}.

---



