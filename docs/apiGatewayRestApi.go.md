# `apiGatewayRestApi` Submodule <a name="`apiGatewayRestApi` Submodule" id="@cdktf/provider-aws.apiGatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayRestApi <a name="ApiGatewayRestApi" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api aws_api_gateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayrestapi"

apigatewayrestapi.NewApiGatewayRestApi(scope Construct, id *string, config ApiGatewayRestApiConfig) ApiGatewayRestApi
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig">ApiGatewayRestApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig">ApiGatewayRestApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetApiKeySource">ResetApiKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBinaryMediaTypes">ResetBinaryMediaTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDisableExecuteApiEndpoint">ResetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetMinimumCompressionSize">ResetMinimumCompressionSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPutRestApiMode">ResetPutRestApiMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration"></a>

```go
func PutEndpointConfiguration(value ApiGatewayRestApiEndpointConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---

##### `ResetApiKeySource` <a name="ResetApiKeySource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetApiKeySource"></a>

```go
func ResetApiKeySource()
```

##### `ResetBinaryMediaTypes` <a name="ResetBinaryMediaTypes" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBinaryMediaTypes"></a>

```go
func ResetBinaryMediaTypes()
```

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBody"></a>

```go
func ResetBody()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableExecuteApiEndpoint` <a name="ResetDisableExecuteApiEndpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDisableExecuteApiEndpoint"></a>

```go
func ResetDisableExecuteApiEndpoint()
```

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointConfiguration"></a>

```go
func ResetEndpointConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetId"></a>

```go
func ResetId()
```

##### `ResetMinimumCompressionSize` <a name="ResetMinimumCompressionSize" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetMinimumCompressionSize"></a>

```go
func ResetMinimumCompressionSize()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetPutRestApiMode` <a name="ResetPutRestApiMode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPutRestApiMode"></a>

```go
func ResetPutRestApiMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayrestapi"

apigatewayrestapi.ApiGatewayRestApi_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayrestapi"

apigatewayrestapi.ApiGatewayRestApi_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayrestapi"

apigatewayrestapi.ApiGatewayRestApi_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference">ApiGatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.executionArn">ExecutionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.rootResourceId">RootResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySourceInput">ApiKeySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypesInput">BinaryMediaTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpointInput">DisableExecuteApiEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSizeInput">MinimumCompressionSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiModeInput">PutRestApiModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySource">ApiKeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiMode">PutRestApiMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfiguration"></a>

```go
func EndpointConfiguration() ApiGatewayRestApiEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference">ApiGatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `ExecutionArn`<sup>Required</sup> <a name="ExecutionArn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.executionArn"></a>

```go
func ExecutionArn() *string
```

- *Type:* *string

---

##### `RootResourceId`<sup>Required</sup> <a name="RootResourceId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.rootResourceId"></a>

```go
func RootResourceId() *string
```

- *Type:* *string

---

##### `ApiKeySourceInput`<sup>Optional</sup> <a name="ApiKeySourceInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySourceInput"></a>

```go
func ApiKeySourceInput() *string
```

- *Type:* *string

---

##### `BinaryMediaTypesInput`<sup>Optional</sup> <a name="BinaryMediaTypesInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypesInput"></a>

```go
func BinaryMediaTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableExecuteApiEndpointInput`<sup>Optional</sup> <a name="DisableExecuteApiEndpointInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpointInput"></a>

```go
func DisableExecuteApiEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfigurationInput"></a>

```go
func EndpointConfigurationInput() ApiGatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MinimumCompressionSizeInput`<sup>Optional</sup> <a name="MinimumCompressionSizeInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSizeInput"></a>

```go
func MinimumCompressionSizeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `PutRestApiModeInput`<sup>Optional</sup> <a name="PutRestApiModeInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiModeInput"></a>

```go
func PutRestApiModeInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApiKeySource`<sup>Required</sup> <a name="ApiKeySource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySource"></a>

```go
func ApiKeySource() *string
```

- *Type:* *string

---

##### `BinaryMediaTypes`<sup>Required</sup> <a name="BinaryMediaTypes" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypes"></a>

```go
func BinaryMediaTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableExecuteApiEndpoint`<sup>Required</sup> <a name="DisableExecuteApiEndpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpoint"></a>

```go
func DisableExecuteApiEndpoint() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MinimumCompressionSize`<sup>Required</sup> <a name="MinimumCompressionSize" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSize"></a>

```go
func MinimumCompressionSize() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `PutRestApiMode`<sup>Required</sup> <a name="PutRestApiMode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiMode"></a>

```go
func PutRestApiMode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayRestApiConfig <a name="ApiGatewayRestApiConfig" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayrestapi"

&apigatewayrestapi.ApiGatewayRestApiConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ApiKeySource: *string,
	BinaryMediaTypes: *[]*string,
	Body: *string,
	Description: *string,
	DisableExecuteApiEndpoint: interface{},
	EndpointConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration,
	Id: *string,
	MinimumCompressionSize: *f64,
	Parameters: *map[string]*string,
	Policy: *string,
	PutRestApiMode: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.apiKeySource">ApiKeySource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.body">Body</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.putRestApiMode">PutRestApiMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}.

---

##### `ApiKeySource`<sup>Optional</sup> <a name="ApiKeySource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.apiKeySource"></a>

```go
ApiKeySource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}.

---

##### `BinaryMediaTypes`<sup>Optional</sup> <a name="BinaryMediaTypes" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.binaryMediaTypes"></a>

```go
BinaryMediaTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}.

---

##### `DisableExecuteApiEndpoint`<sup>Optional</sup> <a name="DisableExecuteApiEndpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.disableExecuteApiEndpoint"></a>

```go
DisableExecuteApiEndpoint interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointConfiguration"></a>

```go
EndpointConfiguration ApiGatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimumCompressionSize`<sup>Optional</sup> <a name="MinimumCompressionSize" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.minimumCompressionSize"></a>

```go
MinimumCompressionSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}.

---

##### `PutRestApiMode`<sup>Optional</sup> <a name="PutRestApiMode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.putRestApiMode"></a>

```go
PutRestApiMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}.

---

### ApiGatewayRestApiEndpointConfiguration <a name="ApiGatewayRestApiEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayrestapi"

&apigatewayrestapi.ApiGatewayRestApiEndpointConfiguration {
	Types: *[]*string,
	VpcEndpointIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.types">Types</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#types ApiGatewayRestApi#types}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}. |

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.types"></a>

```go
Types *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#types ApiGatewayRestApi#types}.

---

##### `VpcEndpointIds`<sup>Optional</sup> <a name="VpcEndpointIds" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

```go
VpcEndpointIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayRestApiEndpointConfigurationOutputReference <a name="ApiGatewayRestApiEndpointConfigurationOutputReference" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayrestapi"

apigatewayrestapi.NewApiGatewayRestApiEndpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiGatewayRestApiEndpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds">ResetVpcEndpointIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcEndpointIds` <a name="ResetVpcEndpointIds" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds"></a>

```go
func ResetVpcEndpointIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.typesInput">TypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput">VpcEndpointIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.typesInput"></a>

```go
func TypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointIdsInput`<sup>Optional</sup> <a name="VpcEndpointIdsInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput"></a>

```go
func VpcEndpointIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointIds`<sup>Required</sup> <a name="VpcEndpointIds" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```go
func VpcEndpointIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiGatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---



