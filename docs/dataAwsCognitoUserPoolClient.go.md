# `dataAwsCognitoUserPoolClient` Submodule <a name="`dataAwsCognitoUserPoolClient` Submodule" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCognitoUserPoolClient <a name="DataAwsCognitoUserPoolClient" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client aws_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

dataawscognitouserpoolclient.NewDataAwsCognitoUserPoolClient(scope Construct, id *string, config DataAwsCognitoUserPoolClientConfig) DataAwsCognitoUserPoolClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig">DataAwsCognitoUserPoolClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig">DataAwsCognitoUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

dataawscognitouserpoolclient.DataAwsCognitoUserPoolClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

dataawscognitouserpoolclient.DataAwsCognitoUserPoolClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

dataawscognitouserpoolclient.DataAwsCognitoUserPoolClient_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlows">AllowedOauthFlows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient">AllowedOauthFlowsUserPoolClient</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthScopes">AllowedOauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList">DataAwsCognitoUserPoolClientAnalyticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.callbackUrls">CallbackUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.generateSecret">GenerateSecret</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idTokenValidity">IdTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.logoutUrls">LogoutUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.readAttributes">ReadAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList">DataAwsCognitoUserPoolClientTokenValidityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.writeAttributes">WriteAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessTokenValidity`<sup>Required</sup> <a name="AccessTokenValidity" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.accessTokenValidity"></a>

```go
func AccessTokenValidity() *f64
```

- *Type:* *f64

---

##### `AllowedOauthFlows`<sup>Required</sup> <a name="AllowedOauthFlows" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlows"></a>

```go
func AllowedOauthFlows() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOauthFlowsUserPoolClient`<sup>Required</sup> <a name="AllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```go
func AllowedOauthFlowsUserPoolClient() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AllowedOauthScopes`<sup>Required</sup> <a name="AllowedOauthScopes" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthScopes"></a>

```go
func AllowedOauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `AnalyticsConfiguration`<sup>Required</sup> <a name="AnalyticsConfiguration" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.analyticsConfiguration"></a>

```go
func AnalyticsConfiguration() DataAwsCognitoUserPoolClientAnalyticsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList">DataAwsCognitoUserPoolClientAnalyticsConfigurationList</a>

---

##### `CallbackUrls`<sup>Required</sup> <a name="CallbackUrls" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.callbackUrls"></a>

```go
func CallbackUrls() *[]*string
```

- *Type:* *[]*string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `DefaultRedirectUri`<sup>Required</sup> <a name="DefaultRedirectUri" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.defaultRedirectUri"></a>

```go
func DefaultRedirectUri() *string
```

- *Type:* *string

---

##### `EnablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```go
func EnablePropagateAdditionalUserContextData() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableTokenRevocation`<sup>Required</sup> <a name="EnableTokenRevocation" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enableTokenRevocation"></a>

```go
func EnableTokenRevocation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExplicitAuthFlows`<sup>Required</sup> <a name="ExplicitAuthFlows" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.explicitAuthFlows"></a>

```go
func ExplicitAuthFlows() *[]*string
```

- *Type:* *[]*string

---

##### `GenerateSecret`<sup>Required</sup> <a name="GenerateSecret" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.generateSecret"></a>

```go
func GenerateSecret() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdTokenValidity`<sup>Required</sup> <a name="IdTokenValidity" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idTokenValidity"></a>

```go
func IdTokenValidity() *f64
```

- *Type:* *f64

---

##### `LogoutUrls`<sup>Required</sup> <a name="LogoutUrls" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.logoutUrls"></a>

```go
func LogoutUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PreventUserExistenceErrors`<sup>Required</sup> <a name="PreventUserExistenceErrors" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```go
func PreventUserExistenceErrors() *string
```

- *Type:* *string

---

##### `ReadAttributes`<sup>Required</sup> <a name="ReadAttributes" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.readAttributes"></a>

```go
func ReadAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenValidity`<sup>Required</sup> <a name="RefreshTokenValidity" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.refreshTokenValidity"></a>

```go
func RefreshTokenValidity() *f64
```

- *Type:* *f64

---

##### `SupportedIdentityProviders`<sup>Required</sup> <a name="SupportedIdentityProviders" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.supportedIdentityProviders"></a>

```go
func SupportedIdentityProviders() *[]*string
```

- *Type:* *[]*string

---

##### `TokenValidityUnits`<sup>Required</sup> <a name="TokenValidityUnits" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tokenValidityUnits"></a>

```go
func TokenValidityUnits() DataAwsCognitoUserPoolClientTokenValidityUnitsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList">DataAwsCognitoUserPoolClientTokenValidityUnitsList</a>

---

##### `WriteAttributes`<sup>Required</sup> <a name="WriteAttributes" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.writeAttributes"></a>

```go
func WriteAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCognitoUserPoolClientAnalyticsConfiguration <a name="DataAwsCognitoUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

&dataawscognitouserpoolclient.DataAwsCognitoUserPoolClientAnalyticsConfiguration {

}
```


### DataAwsCognitoUserPoolClientConfig <a name="DataAwsCognitoUserPoolClientConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

&dataawscognitouserpoolclient.DataAwsCognitoUserPoolClientConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	UserPoolId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#client_id DataAwsCognitoUserPoolClient#client_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#user_pool_id DataAwsCognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#id DataAwsCognitoUserPoolClient#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#client_id DataAwsCognitoUserPoolClient#client_id}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#user_pool_id DataAwsCognitoUserPoolClient#user_pool_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#id DataAwsCognitoUserPoolClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsCognitoUserPoolClientTokenValidityUnits <a name="DataAwsCognitoUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

&dataawscognitouserpoolclient.DataAwsCognitoUserPoolClientTokenValidityUnits {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCognitoUserPoolClientAnalyticsConfigurationList <a name="DataAwsCognitoUserPoolClientAnalyticsConfigurationList" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

dataawscognitouserpoolclient.NewDataAwsCognitoUserPoolClientAnalyticsConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolClientAnalyticsConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

dataawscognitouserpoolclient.NewDataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">UserDataShared</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration">DataAwsCognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `UserDataShared`<sup>Required</sup> <a name="UserDataShared" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```go
func UserDataShared() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolClientAnalyticsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration">DataAwsCognitoUserPoolClientAnalyticsConfiguration</a>

---


### DataAwsCognitoUserPoolClientTokenValidityUnitsList <a name="DataAwsCognitoUserPoolClientTokenValidityUnitsList" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

dataawscognitouserpoolclient.NewDataAwsCognitoUserPoolClientTokenValidityUnitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCognitoUserPoolClientTokenValidityUnitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.get"></a>

```go
func Get(index *f64) DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference <a name="DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscognitouserpoolclient"

dataawscognitouserpoolclient.NewDataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">IdToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits">DataAwsCognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```go
func IdToken() *string
```

- *Type:* *string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```go
func RefreshToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCognitoUserPoolClientTokenValidityUnits
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits">DataAwsCognitoUserPoolClientTokenValidityUnits</a>

---



