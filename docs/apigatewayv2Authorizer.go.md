# `apigatewayv2Authorizer` Submodule <a name="`apigatewayv2Authorizer` Submodule" id="@cdktf/provider-aws.apigatewayv2Authorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Authorizer <a name="Apigatewayv2Authorizer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer aws_apigatewayv2_authorizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2authorizer"

apigatewayv2authorizer.NewApigatewayv2Authorizer(scope Construct, id *string, config Apigatewayv2AuthorizerConfig) Apigatewayv2Authorizer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig">Apigatewayv2AuthorizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig">Apigatewayv2AuthorizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration">PutJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerCredentialsArn">ResetAuthorizerCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerPayloadFormatVersion">ResetAuthorizerPayloadFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerUri">ResetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetEnableSimpleResponses">ResetEnableSimpleResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentitySources">ResetIdentitySources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetJwtConfiguration">ResetJwtConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutJwtConfiguration` <a name="PutJwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration"></a>

```go
func PutJwtConfiguration(value Apigatewayv2AuthorizerJwtConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---

##### `ResetAuthorizerCredentialsArn` <a name="ResetAuthorizerCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerCredentialsArn"></a>

```go
func ResetAuthorizerCredentialsArn()
```

##### `ResetAuthorizerPayloadFormatVersion` <a name="ResetAuthorizerPayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerPayloadFormatVersion"></a>

```go
func ResetAuthorizerPayloadFormatVersion()
```

##### `ResetAuthorizerResultTtlInSeconds` <a name="ResetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerResultTtlInSeconds"></a>

```go
func ResetAuthorizerResultTtlInSeconds()
```

##### `ResetAuthorizerUri` <a name="ResetAuthorizerUri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerUri"></a>

```go
func ResetAuthorizerUri()
```

##### `ResetEnableSimpleResponses` <a name="ResetEnableSimpleResponses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetEnableSimpleResponses"></a>

```go
func ResetEnableSimpleResponses()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentitySources` <a name="ResetIdentitySources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentitySources"></a>

```go
func ResetIdentitySources()
```

##### `ResetJwtConfiguration` <a name="ResetJwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetJwtConfiguration"></a>

```go
func ResetJwtConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2authorizer"

apigatewayv2authorizer.Apigatewayv2Authorizer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2authorizer"

apigatewayv2authorizer.Apigatewayv2Authorizer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2authorizer"

apigatewayv2authorizer.Apigatewayv2Authorizer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfiguration">JwtConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference">Apigatewayv2AuthorizerJwtConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArnInput">AuthorizerCredentialsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersionInput">AuthorizerPayloadFormatVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerTypeInput">AuthorizerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponsesInput">EnableSimpleResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySourcesInput">IdentitySourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfigurationInput">JwtConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArn">AuthorizerCredentialsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersion">AuthorizerPayloadFormatVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerType">AuthorizerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponses">EnableSimpleResponses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySources">IdentitySources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JwtConfiguration`<sup>Required</sup> <a name="JwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfiguration"></a>

```go
func JwtConfiguration() Apigatewayv2AuthorizerJwtConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference">Apigatewayv2AuthorizerJwtConfigurationOutputReference</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `AuthorizerCredentialsArnInput`<sup>Optional</sup> <a name="AuthorizerCredentialsArnInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArnInput"></a>

```go
func AuthorizerCredentialsArnInput() *string
```

- *Type:* *string

---

##### `AuthorizerPayloadFormatVersionInput`<sup>Optional</sup> <a name="AuthorizerPayloadFormatVersionInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersionInput"></a>

```go
func AuthorizerPayloadFormatVersionInput() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="AuthorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSecondsInput"></a>

```go
func AuthorizerResultTtlInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AuthorizerTypeInput`<sup>Optional</sup> <a name="AuthorizerTypeInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerTypeInput"></a>

```go
func AuthorizerTypeInput() *string
```

- *Type:* *string

---

##### `AuthorizerUriInput`<sup>Optional</sup> <a name="AuthorizerUriInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUriInput"></a>

```go
func AuthorizerUriInput() *string
```

- *Type:* *string

---

##### `EnableSimpleResponsesInput`<sup>Optional</sup> <a name="EnableSimpleResponsesInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponsesInput"></a>

```go
func EnableSimpleResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `IdentitySourcesInput`<sup>Optional</sup> <a name="IdentitySourcesInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySourcesInput"></a>

```go
func IdentitySourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JwtConfigurationInput`<sup>Optional</sup> <a name="JwtConfigurationInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfigurationInput"></a>

```go
func JwtConfigurationInput() Apigatewayv2AuthorizerJwtConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `AuthorizerCredentialsArn`<sup>Required</sup> <a name="AuthorizerCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArn"></a>

```go
func AuthorizerCredentialsArn() *string
```

- *Type:* *string

---

##### `AuthorizerPayloadFormatVersion`<sup>Required</sup> <a name="AuthorizerPayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersion"></a>

```go
func AuthorizerPayloadFormatVersion() *string
```

- *Type:* *string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSeconds"></a>

```go
func AuthorizerResultTtlInSeconds() *f64
```

- *Type:* *f64

---

##### `AuthorizerType`<sup>Required</sup> <a name="AuthorizerType" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerType"></a>

```go
func AuthorizerType() *string
```

- *Type:* *string

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUri"></a>

```go
func AuthorizerUri() *string
```

- *Type:* *string

---

##### `EnableSimpleResponses`<sup>Required</sup> <a name="EnableSimpleResponses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponses"></a>

```go
func EnableSimpleResponses() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentitySources`<sup>Required</sup> <a name="IdentitySources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySources"></a>

```go
func IdentitySources() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2AuthorizerConfig <a name="Apigatewayv2AuthorizerConfig" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2authorizer"

&apigatewayv2authorizer.Apigatewayv2AuthorizerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiId: *string,
	AuthorizerType: *string,
	Name: *string,
	AuthorizerCredentialsArn: *string,
	AuthorizerPayloadFormatVersion: *string,
	AuthorizerResultTtlInSeconds: *f64,
	AuthorizerUri: *string,
	EnableSimpleResponses: interface{},
	Id: *string,
	IdentitySources: *[]*string,
	JwtConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.apiId">ApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerType">AuthorizerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerCredentialsArn">AuthorizerCredentialsArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerPayloadFormatVersion">AuthorizerPayloadFormatVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.enableSimpleResponses">EnableSimpleResponses</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identitySources">IdentitySources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.jwtConfiguration">JwtConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | jwt_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}.

---

##### `AuthorizerType`<sup>Required</sup> <a name="AuthorizerType" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerType"></a>

```go
AuthorizerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}.

---

##### `AuthorizerCredentialsArn`<sup>Optional</sup> <a name="AuthorizerCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerCredentialsArn"></a>

```go
AuthorizerCredentialsArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}.

---

##### `AuthorizerPayloadFormatVersion`<sup>Optional</sup> <a name="AuthorizerPayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerPayloadFormatVersion"></a>

```go
AuthorizerPayloadFormatVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}.

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```go
AuthorizerResultTtlInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}.

---

##### `AuthorizerUri`<sup>Optional</sup> <a name="AuthorizerUri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerUri"></a>

```go
AuthorizerUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}.

---

##### `EnableSimpleResponses`<sup>Optional</sup> <a name="EnableSimpleResponses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.enableSimpleResponses"></a>

```go
EnableSimpleResponses interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentitySources`<sup>Optional</sup> <a name="IdentitySources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identitySources"></a>

```go
IdentitySources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}.

---

##### `JwtConfiguration`<sup>Optional</sup> <a name="JwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.jwtConfiguration"></a>

```go
JwtConfiguration Apigatewayv2AuthorizerJwtConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

jwt_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}

---

### Apigatewayv2AuthorizerJwtConfiguration <a name="Apigatewayv2AuthorizerJwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2authorizer"

&apigatewayv2authorizer.Apigatewayv2AuthorizerJwtConfiguration {
	Audience: *[]*string,
	Issuer: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.audience">Audience</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}. |

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.audience"></a>

```go
Audience *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2AuthorizerJwtConfigurationOutputReference <a name="Apigatewayv2AuthorizerJwtConfigurationOutputReference" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2authorizer"

apigatewayv2authorizer.NewApigatewayv2AuthorizerJwtConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Apigatewayv2AuthorizerJwtConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audience">Audience</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audience"></a>

```go
func Audience() *[]*string
```

- *Type:* *[]*string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() Apigatewayv2AuthorizerJwtConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---



