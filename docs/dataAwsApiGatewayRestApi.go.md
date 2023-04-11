# `dataAwsApiGatewayRestApi` Submodule <a name="`dataAwsApiGatewayRestApi` Submodule" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewayRestApi <a name="DataAwsApiGatewayRestApi" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api aws_api_gateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayrestapi"

dataawsapigatewayrestapi.NewDataAwsApiGatewayRestApi(scope Construct, id *string, config DataAwsApiGatewayRestApiConfig) DataAwsApiGatewayRestApi
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig">DataAwsApiGatewayRestApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig">DataAwsApiGatewayRestApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayrestapi"

dataawsapigatewayrestapi.DataAwsApiGatewayRestApi_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayrestapi"

dataawsapigatewayrestapi.DataAwsApiGatewayRestApi_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayrestapi"

dataawsapigatewayrestapi.DataAwsApiGatewayRestApi_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.apiKeySource">ApiKeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList">DataAwsApiGatewayRestApiEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.executionArn">ExecutionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.rootResourceId">RootResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApiKeySource`<sup>Required</sup> <a name="ApiKeySource" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.apiKeySource"></a>

```go
func ApiKeySource() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BinaryMediaTypes`<sup>Required</sup> <a name="BinaryMediaTypes" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.binaryMediaTypes"></a>

```go
func BinaryMediaTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.endpointConfiguration"></a>

```go
func EndpointConfiguration() DataAwsApiGatewayRestApiEndpointConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList">DataAwsApiGatewayRestApiEndpointConfigurationList</a>

---

##### `ExecutionArn`<sup>Required</sup> <a name="ExecutionArn" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.executionArn"></a>

```go
func ExecutionArn() *string
```

- *Type:* *string

---

##### `MinimumCompressionSize`<sup>Required</sup> <a name="MinimumCompressionSize" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.minimumCompressionSize"></a>

```go
func MinimumCompressionSize() *f64
```

- *Type:* *f64

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `RootResourceId`<sup>Required</sup> <a name="RootResourceId" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.rootResourceId"></a>

```go
func RootResourceId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewayRestApiConfig <a name="DataAwsApiGatewayRestApiConfig" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayrestapi"

&dataawsapigatewayrestapi.DataAwsApiGatewayRestApiConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api#name DataAwsApiGatewayRestApi#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api#id DataAwsApiGatewayRestApi#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api#tags DataAwsApiGatewayRestApi#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api#name DataAwsApiGatewayRestApi#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api#id DataAwsApiGatewayRestApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api#tags DataAwsApiGatewayRestApi#tags}.

---

### DataAwsApiGatewayRestApiEndpointConfiguration <a name="DataAwsApiGatewayRestApiEndpointConfiguration" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayrestapi"

&dataawsapigatewayrestapi.DataAwsApiGatewayRestApiEndpointConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsApiGatewayRestApiEndpointConfigurationList <a name="DataAwsApiGatewayRestApiEndpointConfigurationList" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayrestapi"

dataawsapigatewayrestapi.NewDataAwsApiGatewayRestApiEndpointConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsApiGatewayRestApiEndpointConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsApiGatewayRestApiEndpointConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsApiGatewayRestApiEndpointConfigurationOutputReference <a name="DataAwsApiGatewayRestApiEndpointConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsapigatewayrestapi"

dataawsapigatewayrestapi.NewDataAwsApiGatewayRestApiEndpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsApiGatewayRestApiEndpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration">DataAwsApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointIds`<sup>Required</sup> <a name="VpcEndpointIds" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```go
func VpcEndpointIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsApiGatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration">DataAwsApiGatewayRestApiEndpointConfiguration</a>

---



