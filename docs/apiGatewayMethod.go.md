# `apiGatewayMethod` Submodule <a name="`apiGatewayMethod` Submodule" id="@cdktf/provider-aws.apiGatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayMethod <a name="ApiGatewayMethod" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method aws_api_gateway_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaymethod"

apigatewaymethod.NewApiGatewayMethod(scope Construct, id *string, config ApiGatewayMethodConfig) ApiGatewayMethod
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig">ApiGatewayMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig">ApiGatewayMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetApiKeyRequired">ResetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizationScopes">ResetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizerId">ResetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOperationName">ResetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestModels">ResetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestParameters">ResetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestValidatorId">ResetRequestValidatorId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetApiKeyRequired` <a name="ResetApiKeyRequired" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetApiKeyRequired"></a>

```go
func ResetApiKeyRequired()
```

##### `ResetAuthorizationScopes` <a name="ResetAuthorizationScopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizationScopes"></a>

```go
func ResetAuthorizationScopes()
```

##### `ResetAuthorizerId` <a name="ResetAuthorizerId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizerId"></a>

```go
func ResetAuthorizerId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetId"></a>

```go
func ResetId()
```

##### `ResetOperationName` <a name="ResetOperationName" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOperationName"></a>

```go
func ResetOperationName()
```

##### `ResetRequestModels` <a name="ResetRequestModels" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestModels"></a>

```go
func ResetRequestModels()
```

##### `ResetRequestParameters` <a name="ResetRequestParameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestParameters"></a>

```go
func ResetRequestParameters()
```

##### `ResetRequestValidatorId` <a name="ResetRequestValidatorId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestValidatorId"></a>

```go
func ResetRequestValidatorId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaymethod"

apigatewaymethod.ApiGatewayMethod_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaymethod"

apigatewaymethod.ApiGatewayMethod_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaymethod"

apigatewaymethod.ApiGatewayMethod_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequiredInput">ApiKeyRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopesInput">AuthorizationScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerIdInput">AuthorizerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationNameInput">OperationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModelsInput">RequestModelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParametersInput">RequestParametersInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorIdInput">RequestValidatorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiIdInput">RestApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopes">AuthorizationScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationName">OperationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModels">RequestModels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParameters">RequestParameters</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorId">RequestValidatorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiKeyRequiredInput`<sup>Optional</sup> <a name="ApiKeyRequiredInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequiredInput"></a>

```go
func ApiKeyRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `AuthorizationScopesInput`<sup>Optional</sup> <a name="AuthorizationScopesInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopesInput"></a>

```go
func AuthorizationScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizerIdInput`<sup>Optional</sup> <a name="AuthorizerIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerIdInput"></a>

```go
func AuthorizerIdInput() *string
```

- *Type:* *string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OperationNameInput`<sup>Optional</sup> <a name="OperationNameInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationNameInput"></a>

```go
func OperationNameInput() *string
```

- *Type:* *string

---

##### `RequestModelsInput`<sup>Optional</sup> <a name="RequestModelsInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModelsInput"></a>

```go
func RequestModelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestParametersInput`<sup>Optional</sup> <a name="RequestParametersInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParametersInput"></a>

```go
func RequestParametersInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `RequestValidatorIdInput`<sup>Optional</sup> <a name="RequestValidatorIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorIdInput"></a>

```go
func RequestValidatorIdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiIdInput"></a>

```go
func RestApiIdInput() *string
```

- *Type:* *string

---

##### `ApiKeyRequired`<sup>Required</sup> <a name="ApiKeyRequired" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequired"></a>

```go
func ApiKeyRequired() interface{}
```

- *Type:* interface{}

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `AuthorizationScopes`<sup>Required</sup> <a name="AuthorizationScopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopes"></a>

```go
func AuthorizationScopes() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerId"></a>

```go
func AuthorizerId() *string
```

- *Type:* *string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationName"></a>

```go
func OperationName() *string
```

- *Type:* *string

---

##### `RequestModels`<sup>Required</sup> <a name="RequestModels" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModels"></a>

```go
func RequestModels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParameters"></a>

```go
func RequestParameters() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `RequestValidatorId`<sup>Required</sup> <a name="RequestValidatorId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorId"></a>

```go
func RequestValidatorId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayMethodConfig <a name="ApiGatewayMethodConfig" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaymethod"

&apigatewaymethod.ApiGatewayMethodConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Authorization: *string,
	HttpMethod: *string,
	ResourceId: *string,
	RestApiId: *string,
	ApiKeyRequired: interface{},
	AuthorizationScopes: *[]*string,
	AuthorizerId: *string,
	Id: *string,
	OperationName: *string,
	RequestModels: *map[string]*string,
	RequestParameters: *map[string]interface{},
	RequestValidatorId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization ApiGatewayMethod#authorization}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#http_method ApiGatewayMethod#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#resource_id ApiGatewayMethod#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.restApiId">RestApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.apiKeyRequired">ApiKeyRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizationScopes">AuthorizationScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizerId">AuthorizerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#id ApiGatewayMethod#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.operationName">OperationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#operation_name ApiGatewayMethod#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestModels">RequestModels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_models ApiGatewayMethod#request_models}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestParameters">RequestParameters</a></code> | <code>*map[string]interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestValidatorId">RequestValidatorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization ApiGatewayMethod#authorization}.

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#http_method ApiGatewayMethod#http_method}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#resource_id ApiGatewayMethod#resource_id}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.restApiId"></a>

```go
RestApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}.

---

##### `ApiKeyRequired`<sup>Optional</sup> <a name="ApiKeyRequired" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.apiKeyRequired"></a>

```go
ApiKeyRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}.

---

##### `AuthorizationScopes`<sup>Optional</sup> <a name="AuthorizationScopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizationScopes"></a>

```go
AuthorizationScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}.

---

##### `AuthorizerId`<sup>Optional</sup> <a name="AuthorizerId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizerId"></a>

```go
AuthorizerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#id ApiGatewayMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperationName`<sup>Optional</sup> <a name="OperationName" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.operationName"></a>

```go
OperationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#operation_name ApiGatewayMethod#operation_name}.

---

##### `RequestModels`<sup>Optional</sup> <a name="RequestModels" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestModels"></a>

```go
RequestModels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_models ApiGatewayMethod#request_models}.

---

##### `RequestParameters`<sup>Optional</sup> <a name="RequestParameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestParameters"></a>

```go
RequestParameters *map[string]interface{}
```

- *Type:* *map[string]interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}.

---

##### `RequestValidatorId`<sup>Optional</sup> <a name="RequestValidatorId" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestValidatorId"></a>

```go
RequestValidatorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}.

---



