# `apigatewayv2Api` Submodule <a name="`apigatewayv2Api` Submodule" id="@cdktf/provider-aws.apigatewayv2Api"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Api <a name="Apigatewayv2Api" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api aws_apigatewayv2_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2api"

apigatewayv2api.NewApigatewayv2Api(scope Construct, id *string, config Apigatewayv2ApiConfig) Apigatewayv2Api
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig">Apigatewayv2ApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig">Apigatewayv2ApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration">PutCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetApiKeySelectionExpression">ResetApiKeySelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCorsConfiguration">ResetCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCredentialsArn">ResetCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDisableExecuteApiEndpoint">ResetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetFailOnWarnings">ResetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteKey">ResetRouteKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteSelectionExpression">ResetRouteSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCorsConfiguration` <a name="PutCorsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration"></a>

```go
func PutCorsConfiguration(value Apigatewayv2ApiCorsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.putCorsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---

##### `ResetApiKeySelectionExpression` <a name="ResetApiKeySelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetApiKeySelectionExpression"></a>

```go
func ResetApiKeySelectionExpression()
```

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetBody"></a>

```go
func ResetBody()
```

##### `ResetCorsConfiguration` <a name="ResetCorsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCorsConfiguration"></a>

```go
func ResetCorsConfiguration()
```

##### `ResetCredentialsArn` <a name="ResetCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetCredentialsArn"></a>

```go
func ResetCredentialsArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableExecuteApiEndpoint` <a name="ResetDisableExecuteApiEndpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetDisableExecuteApiEndpoint"></a>

```go
func ResetDisableExecuteApiEndpoint()
```

##### `ResetFailOnWarnings` <a name="ResetFailOnWarnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetFailOnWarnings"></a>

```go
func ResetFailOnWarnings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetId"></a>

```go
func ResetId()
```

##### `ResetRouteKey` <a name="ResetRouteKey" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteKey"></a>

```go
func ResetRouteKey()
```

##### `ResetRouteSelectionExpression` <a name="ResetRouteSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetRouteSelectionExpression"></a>

```go
func ResetRouteSelectionExpression()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2api"

apigatewayv2api.Apigatewayv2Api_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2api"

apigatewayv2api.Apigatewayv2Api_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2api"

apigatewayv2api.Apigatewayv2Api_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiEndpoint">ApiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfiguration">CorsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference">Apigatewayv2ApiCorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.executionArn">ExecutionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpressionInput">ApiKeySelectionExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfigurationInput">CorsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArnInput">CredentialsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpointInput">DisableExecuteApiEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarningsInput">FailOnWarningsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKeyInput">RouteKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpressionInput">RouteSelectionExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpression">ApiKeySelectionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArn">CredentialsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarnings">FailOnWarnings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolType">ProtocolType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKey">RouteKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpression">RouteSelectionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiEndpoint`<sup>Required</sup> <a name="ApiEndpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiEndpoint"></a>

```go
func ApiEndpoint() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CorsConfiguration`<sup>Required</sup> <a name="CorsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfiguration"></a>

```go
func CorsConfiguration() Apigatewayv2ApiCorsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference">Apigatewayv2ApiCorsConfigurationOutputReference</a>

---

##### `ExecutionArn`<sup>Required</sup> <a name="ExecutionArn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.executionArn"></a>

```go
func ExecutionArn() *string
```

- *Type:* *string

---

##### `ApiKeySelectionExpressionInput`<sup>Optional</sup> <a name="ApiKeySelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpressionInput"></a>

```go
func ApiKeySelectionExpressionInput() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `CorsConfigurationInput`<sup>Optional</sup> <a name="CorsConfigurationInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.corsConfigurationInput"></a>

```go
func CorsConfigurationInput() Apigatewayv2ApiCorsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---

##### `CredentialsArnInput`<sup>Optional</sup> <a name="CredentialsArnInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArnInput"></a>

```go
func CredentialsArnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableExecuteApiEndpointInput`<sup>Optional</sup> <a name="DisableExecuteApiEndpointInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpointInput"></a>

```go
func DisableExecuteApiEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `FailOnWarningsInput`<sup>Optional</sup> <a name="FailOnWarningsInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarningsInput"></a>

```go
func FailOnWarningsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolTypeInput"></a>

```go
func ProtocolTypeInput() *string
```

- *Type:* *string

---

##### `RouteKeyInput`<sup>Optional</sup> <a name="RouteKeyInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKeyInput"></a>

```go
func RouteKeyInput() *string
```

- *Type:* *string

---

##### `RouteSelectionExpressionInput`<sup>Optional</sup> <a name="RouteSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpressionInput"></a>

```go
func RouteSelectionExpressionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ApiKeySelectionExpression`<sup>Required</sup> <a name="ApiKeySelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.apiKeySelectionExpression"></a>

```go
func ApiKeySelectionExpression() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `CredentialsArn`<sup>Required</sup> <a name="CredentialsArn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.credentialsArn"></a>

```go
func CredentialsArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableExecuteApiEndpoint`<sup>Required</sup> <a name="DisableExecuteApiEndpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.disableExecuteApiEndpoint"></a>

```go
func DisableExecuteApiEndpoint() interface{}
```

- *Type:* interface{}

---

##### `FailOnWarnings`<sup>Required</sup> <a name="FailOnWarnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.failOnWarnings"></a>

```go
func FailOnWarnings() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.protocolType"></a>

```go
func ProtocolType() *string
```

- *Type:* *string

---

##### `RouteKey`<sup>Required</sup> <a name="RouteKey" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeKey"></a>

```go
func RouteKey() *string
```

- *Type:* *string

---

##### `RouteSelectionExpression`<sup>Required</sup> <a name="RouteSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.routeSelectionExpression"></a>

```go
func RouteSelectionExpression() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2Api.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2ApiConfig <a name="Apigatewayv2ApiConfig" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2api"

&apigatewayv2api.Apigatewayv2ApiConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProtocolType: *string,
	ApiKeySelectionExpression: *string,
	Body: *string,
	CorsConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration,
	CredentialsArn: *string,
	Description: *string,
	DisableExecuteApiEndpoint: interface{},
	FailOnWarnings: interface{},
	Id: *string,
	RouteKey: *string,
	RouteSelectionExpression: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Target: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#name Apigatewayv2Api#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.protocolType">ProtocolType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.apiKeySelectionExpression">ApiKeySelectionExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.body">Body</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#body Apigatewayv2Api#body}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.corsConfiguration">CorsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | cors_configuration block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.credentialsArn">CredentialsArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#description Apigatewayv2Api#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.failOnWarnings">FailOnWarnings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#id Apigatewayv2Api#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeKey">RouteKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_key Apigatewayv2Api#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeSelectionExpression">RouteSelectionExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags Apigatewayv2Api#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#target Apigatewayv2Api#target}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#version Apigatewayv2Api#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#name Apigatewayv2Api#name}.

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.protocolType"></a>

```go
ProtocolType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}.

---

##### `ApiKeySelectionExpression`<sup>Optional</sup> <a name="ApiKeySelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.apiKeySelectionExpression"></a>

```go
ApiKeySelectionExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#body Apigatewayv2Api#body}.

---

##### `CorsConfiguration`<sup>Optional</sup> <a name="CorsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.corsConfiguration"></a>

```go
CorsConfiguration Apigatewayv2ApiCorsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

cors_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#cors_configuration Apigatewayv2Api#cors_configuration}

---

##### `CredentialsArn`<sup>Optional</sup> <a name="CredentialsArn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.credentialsArn"></a>

```go
CredentialsArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#description Apigatewayv2Api#description}.

---

##### `DisableExecuteApiEndpoint`<sup>Optional</sup> <a name="DisableExecuteApiEndpoint" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.disableExecuteApiEndpoint"></a>

```go
DisableExecuteApiEndpoint interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}.

---

##### `FailOnWarnings`<sup>Optional</sup> <a name="FailOnWarnings" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.failOnWarnings"></a>

```go
FailOnWarnings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#id Apigatewayv2Api#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RouteKey`<sup>Optional</sup> <a name="RouteKey" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeKey"></a>

```go
RouteKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_key Apigatewayv2Api#route_key}.

---

##### `RouteSelectionExpression`<sup>Optional</sup> <a name="RouteSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.routeSelectionExpression"></a>

```go
RouteSelectionExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags Apigatewayv2Api#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#target Apigatewayv2Api#target}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#version Apigatewayv2Api#version}.

---

### Apigatewayv2ApiCorsConfiguration <a name="Apigatewayv2ApiCorsConfiguration" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2api"

&apigatewayv2api.Apigatewayv2ApiCorsConfiguration {
	AllowCredentials: interface{},
	AllowHeaders: *[]*string,
	AllowMethods: *[]*string,
	AllowOrigins: *[]*string,
	ExposeHeaders: *[]*string,
	MaxAge: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_credentials Apigatewayv2Api#allow_credentials}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowHeaders">AllowHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_headers Apigatewayv2Api#allow_headers}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowMethods">AllowMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_methods Apigatewayv2Api#allow_methods}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowOrigins">AllowOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_origins Apigatewayv2Api#allow_origins}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.exposeHeaders">ExposeHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#expose_headers Apigatewayv2Api#expose_headers}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.maxAge">MaxAge</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#max_age Apigatewayv2Api#max_age}. |

---

##### `AllowCredentials`<sup>Optional</sup> <a name="AllowCredentials" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowCredentials"></a>

```go
AllowCredentials interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_credentials Apigatewayv2Api#allow_credentials}.

---

##### `AllowHeaders`<sup>Optional</sup> <a name="AllowHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowHeaders"></a>

```go
AllowHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_headers Apigatewayv2Api#allow_headers}.

---

##### `AllowMethods`<sup>Optional</sup> <a name="AllowMethods" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowMethods"></a>

```go
AllowMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_methods Apigatewayv2Api#allow_methods}.

---

##### `AllowOrigins`<sup>Optional</sup> <a name="AllowOrigins" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.allowOrigins"></a>

```go
AllowOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#allow_origins Apigatewayv2Api#allow_origins}.

---

##### `ExposeHeaders`<sup>Optional</sup> <a name="ExposeHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.exposeHeaders"></a>

```go
ExposeHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#expose_headers Apigatewayv2Api#expose_headers}.

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration.property.maxAge"></a>

```go
MaxAge *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api#max_age Apigatewayv2Api#max_age}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2ApiCorsConfigurationOutputReference <a name="Apigatewayv2ApiCorsConfigurationOutputReference" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2api"

apigatewayv2api.NewApigatewayv2ApiCorsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Apigatewayv2ApiCorsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowCredentials">ResetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowHeaders">ResetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowMethods">ResetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowOrigins">ResetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetExposeHeaders">ResetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowCredentials` <a name="ResetAllowCredentials" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowCredentials"></a>

```go
func ResetAllowCredentials()
```

##### `ResetAllowHeaders` <a name="ResetAllowHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowHeaders"></a>

```go
func ResetAllowHeaders()
```

##### `ResetAllowMethods` <a name="ResetAllowMethods" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowMethods"></a>

```go
func ResetAllowMethods()
```

##### `ResetAllowOrigins` <a name="ResetAllowOrigins" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetAllowOrigins"></a>

```go
func ResetAllowOrigins()
```

##### `ResetExposeHeaders` <a name="ResetExposeHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetExposeHeaders"></a>

```go
func ResetExposeHeaders()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.resetMaxAge"></a>

```go
func ResetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentialsInput">AllowCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeadersInput">AllowHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethodsInput">AllowMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOriginsInput">AllowOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeadersInput">ExposeHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders">AllowHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods">AllowMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins">AllowOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders">ExposeHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowCredentialsInput`<sup>Optional</sup> <a name="AllowCredentialsInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentialsInput"></a>

```go
func AllowCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowHeadersInput`<sup>Optional</sup> <a name="AllowHeadersInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeadersInput"></a>

```go
func AllowHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowMethodsInput`<sup>Optional</sup> <a name="AllowMethodsInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethodsInput"></a>

```go
func AllowMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowOriginsInput`<sup>Optional</sup> <a name="AllowOriginsInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOriginsInput"></a>

```go
func AllowOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExposeHeadersInput`<sup>Optional</sup> <a name="ExposeHeadersInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeadersInput"></a>

```go
func ExposeHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAgeInput"></a>

```go
func MaxAgeInput() *f64
```

- *Type:* *f64

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials"></a>

```go
func AllowCredentials() interface{}
```

- *Type:* interface{}

---

##### `AllowHeaders`<sup>Required</sup> <a name="AllowHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders"></a>

```go
func AllowHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowMethods`<sup>Required</sup> <a name="AllowMethods" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods"></a>

```go
func AllowMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowOrigins`<sup>Required</sup> <a name="AllowOrigins" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins"></a>

```go
func AllowOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ExposeHeaders`<sup>Required</sup> <a name="ExposeHeaders" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders"></a>

```go
func ExposeHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() Apigatewayv2ApiCorsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Api.Apigatewayv2ApiCorsConfiguration">Apigatewayv2ApiCorsConfiguration</a>

---



