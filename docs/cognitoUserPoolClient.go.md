# `cognitoUserPoolClient` Submodule <a name="`cognitoUserPoolClient` Submodule" id="@cdktf/provider-aws.cognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolClient <a name="CognitoUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client aws_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpoolclient"

cognitouserpoolclient.NewCognitoUserPoolClient(scope Construct, id *string, config CognitoUserPoolClientConfig) CognitoUserPoolClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig">CognitoUserPoolClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig">CognitoUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration">PutAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits">PutTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity">ResetAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlows">ResetAllowedOauthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlowsUserPoolClient">ResetAllowedOauthFlowsUserPoolClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthScopes">ResetAllowedOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration">ResetAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAuthSessionValidity">ResetAuthSessionValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrls">ResetCallbackUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri">ResetDefaultRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetEnablePropagateAdditionalUserContextData">ResetEnablePropagateAdditionalUserContextData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation">ResetEnableTokenRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows">ResetExplicitAuthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret">ResetGenerateSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity">ResetIdTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrls">ResetLogoutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors">ResetPreventUserExistenceErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes">ResetReadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity">ResetRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders">ResetSupportedIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits">ResetTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes">ResetWriteAttributes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAnalyticsConfiguration` <a name="PutAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration"></a>

```go
func PutAnalyticsConfiguration(value CognitoUserPoolClientAnalyticsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---

##### `PutTokenValidityUnits` <a name="PutTokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits"></a>

```go
func PutTokenValidityUnits(value CognitoUserPoolClientTokenValidityUnits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---

##### `ResetAccessTokenValidity` <a name="ResetAccessTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity"></a>

```go
func ResetAccessTokenValidity()
```

##### `ResetAllowedOauthFlows` <a name="ResetAllowedOauthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlows"></a>

```go
func ResetAllowedOauthFlows()
```

##### `ResetAllowedOauthFlowsUserPoolClient` <a name="ResetAllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlowsUserPoolClient"></a>

```go
func ResetAllowedOauthFlowsUserPoolClient()
```

##### `ResetAllowedOauthScopes` <a name="ResetAllowedOauthScopes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthScopes"></a>

```go
func ResetAllowedOauthScopes()
```

##### `ResetAnalyticsConfiguration` <a name="ResetAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration"></a>

```go
func ResetAnalyticsConfiguration()
```

##### `ResetAuthSessionValidity` <a name="ResetAuthSessionValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAuthSessionValidity"></a>

```go
func ResetAuthSessionValidity()
```

##### `ResetCallbackUrls` <a name="ResetCallbackUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrls"></a>

```go
func ResetCallbackUrls()
```

##### `ResetDefaultRedirectUri` <a name="ResetDefaultRedirectUri" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri"></a>

```go
func ResetDefaultRedirectUri()
```

##### `ResetEnablePropagateAdditionalUserContextData` <a name="ResetEnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetEnablePropagateAdditionalUserContextData"></a>

```go
func ResetEnablePropagateAdditionalUserContextData()
```

##### `ResetEnableTokenRevocation` <a name="ResetEnableTokenRevocation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation"></a>

```go
func ResetEnableTokenRevocation()
```

##### `ResetExplicitAuthFlows` <a name="ResetExplicitAuthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows"></a>

```go
func ResetExplicitAuthFlows()
```

##### `ResetGenerateSecret` <a name="ResetGenerateSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret"></a>

```go
func ResetGenerateSecret()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetId"></a>

```go
func ResetId()
```

##### `ResetIdTokenValidity` <a name="ResetIdTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity"></a>

```go
func ResetIdTokenValidity()
```

##### `ResetLogoutUrls` <a name="ResetLogoutUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrls"></a>

```go
func ResetLogoutUrls()
```

##### `ResetPreventUserExistenceErrors` <a name="ResetPreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors"></a>

```go
func ResetPreventUserExistenceErrors()
```

##### `ResetReadAttributes` <a name="ResetReadAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes"></a>

```go
func ResetReadAttributes()
```

##### `ResetRefreshTokenValidity` <a name="ResetRefreshTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity"></a>

```go
func ResetRefreshTokenValidity()
```

##### `ResetSupportedIdentityProviders` <a name="ResetSupportedIdentityProviders" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders"></a>

```go
func ResetSupportedIdentityProviders()
```

##### `ResetTokenValidityUnits` <a name="ResetTokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits"></a>

```go
func ResetTokenValidityUnits()
```

##### `ResetWriteAttributes` <a name="ResetWriteAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes"></a>

```go
func ResetWriteAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpoolclient"

cognitouserpoolclient.CognitoUserPoolClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpoolclient"

cognitouserpoolclient.CognitoUserPoolClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpoolclient"

cognitouserpoolclient.CognitoUserPoolClient_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference">CognitoUserPoolClientAnalyticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference">CognitoUserPoolClientTokenValidityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput">AccessTokenValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsInput">AllowedOauthFlowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClientInput">AllowedOauthFlowsUserPoolClientInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopesInput">AllowedOauthScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput">AnalyticsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidityInput">AuthSessionValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrlsInput">CallbackUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput">DefaultRedirectUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextDataInput">EnablePropagateAdditionalUserContextDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput">EnableTokenRevocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput">ExplicitAuthFlowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput">GenerateSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput">IdTokenValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrlsInput">LogoutUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput">PreventUserExistenceErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput">ReadAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput">RefreshTokenValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput">SupportedIdentityProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput">TokenValidityUnitsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput">WriteAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlows">AllowedOauthFlows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient">AllowedOauthFlowsUserPoolClient</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopes">AllowedOauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidity">AuthSessionValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrls">CallbackUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret">GenerateSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity">IdTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrls">LogoutUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes">ReadAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes">WriteAttributes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalyticsConfiguration`<sup>Required</sup> <a name="AnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration"></a>

```go
func AnalyticsConfiguration() CognitoUserPoolClientAnalyticsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference">CognitoUserPoolClientAnalyticsConfigurationOutputReference</a>

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `TokenValidityUnits`<sup>Required</sup> <a name="TokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits"></a>

```go
func TokenValidityUnits() CognitoUserPoolClientTokenValidityUnitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference">CognitoUserPoolClientTokenValidityUnitsOutputReference</a>

---

##### `AccessTokenValidityInput`<sup>Optional</sup> <a name="AccessTokenValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput"></a>

```go
func AccessTokenValidityInput() *f64
```

- *Type:* *f64

---

##### `AllowedOauthFlowsInput`<sup>Optional</sup> <a name="AllowedOauthFlowsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsInput"></a>

```go
func AllowedOauthFlowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOauthFlowsUserPoolClientInput`<sup>Optional</sup> <a name="AllowedOauthFlowsUserPoolClientInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClientInput"></a>

```go
func AllowedOauthFlowsUserPoolClientInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedOauthScopesInput`<sup>Optional</sup> <a name="AllowedOauthScopesInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopesInput"></a>

```go
func AllowedOauthScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnalyticsConfigurationInput`<sup>Optional</sup> <a name="AnalyticsConfigurationInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput"></a>

```go
func AnalyticsConfigurationInput() CognitoUserPoolClientAnalyticsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---

##### `AuthSessionValidityInput`<sup>Optional</sup> <a name="AuthSessionValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidityInput"></a>

```go
func AuthSessionValidityInput() *f64
```

- *Type:* *f64

---

##### `CallbackUrlsInput`<sup>Optional</sup> <a name="CallbackUrlsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrlsInput"></a>

```go
func CallbackUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRedirectUriInput`<sup>Optional</sup> <a name="DefaultRedirectUriInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput"></a>

```go
func DefaultRedirectUriInput() *string
```

- *Type:* *string

---

##### `EnablePropagateAdditionalUserContextDataInput`<sup>Optional</sup> <a name="EnablePropagateAdditionalUserContextDataInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextDataInput"></a>

```go
func EnablePropagateAdditionalUserContextDataInput() interface{}
```

- *Type:* interface{}

---

##### `EnableTokenRevocationInput`<sup>Optional</sup> <a name="EnableTokenRevocationInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput"></a>

```go
func EnableTokenRevocationInput() interface{}
```

- *Type:* interface{}

---

##### `ExplicitAuthFlowsInput`<sup>Optional</sup> <a name="ExplicitAuthFlowsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput"></a>

```go
func ExplicitAuthFlowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GenerateSecretInput`<sup>Optional</sup> <a name="GenerateSecretInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput"></a>

```go
func GenerateSecretInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdTokenValidityInput`<sup>Optional</sup> <a name="IdTokenValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput"></a>

```go
func IdTokenValidityInput() *f64
```

- *Type:* *f64

---

##### `LogoutUrlsInput`<sup>Optional</sup> <a name="LogoutUrlsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrlsInput"></a>

```go
func LogoutUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PreventUserExistenceErrorsInput`<sup>Optional</sup> <a name="PreventUserExistenceErrorsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```go
func PreventUserExistenceErrorsInput() *string
```

- *Type:* *string

---

##### `ReadAttributesInput`<sup>Optional</sup> <a name="ReadAttributesInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput"></a>

```go
func ReadAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenValidityInput`<sup>Optional</sup> <a name="RefreshTokenValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput"></a>

```go
func RefreshTokenValidityInput() *f64
```

- *Type:* *f64

---

##### `SupportedIdentityProvidersInput`<sup>Optional</sup> <a name="SupportedIdentityProvidersInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput"></a>

```go
func SupportedIdentityProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenValidityUnitsInput`<sup>Optional</sup> <a name="TokenValidityUnitsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput"></a>

```go
func TokenValidityUnitsInput() CognitoUserPoolClientTokenValidityUnits
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `WriteAttributesInput`<sup>Optional</sup> <a name="WriteAttributesInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput"></a>

```go
func WriteAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessTokenValidity`<sup>Required</sup> <a name="AccessTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity"></a>

```go
func AccessTokenValidity() *f64
```

- *Type:* *f64

---

##### `AllowedOauthFlows`<sup>Required</sup> <a name="AllowedOauthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlows"></a>

```go
func AllowedOauthFlows() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOauthFlowsUserPoolClient`<sup>Required</sup> <a name="AllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```go
func AllowedOauthFlowsUserPoolClient() interface{}
```

- *Type:* interface{}

---

##### `AllowedOauthScopes`<sup>Required</sup> <a name="AllowedOauthScopes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopes"></a>

```go
func AllowedOauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `AuthSessionValidity`<sup>Required</sup> <a name="AuthSessionValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidity"></a>

```go
func AuthSessionValidity() *f64
```

- *Type:* *f64

---

##### `CallbackUrls`<sup>Required</sup> <a name="CallbackUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrls"></a>

```go
func CallbackUrls() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRedirectUri`<sup>Required</sup> <a name="DefaultRedirectUri" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri"></a>

```go
func DefaultRedirectUri() *string
```

- *Type:* *string

---

##### `EnablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```go
func EnablePropagateAdditionalUserContextData() interface{}
```

- *Type:* interface{}

---

##### `EnableTokenRevocation`<sup>Required</sup> <a name="EnableTokenRevocation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation"></a>

```go
func EnableTokenRevocation() interface{}
```

- *Type:* interface{}

---

##### `ExplicitAuthFlows`<sup>Required</sup> <a name="ExplicitAuthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows"></a>

```go
func ExplicitAuthFlows() *[]*string
```

- *Type:* *[]*string

---

##### `GenerateSecret`<sup>Required</sup> <a name="GenerateSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret"></a>

```go
func GenerateSecret() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdTokenValidity`<sup>Required</sup> <a name="IdTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity"></a>

```go
func IdTokenValidity() *f64
```

- *Type:* *f64

---

##### `LogoutUrls`<sup>Required</sup> <a name="LogoutUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrls"></a>

```go
func LogoutUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PreventUserExistenceErrors`<sup>Required</sup> <a name="PreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```go
func PreventUserExistenceErrors() *string
```

- *Type:* *string

---

##### `ReadAttributes`<sup>Required</sup> <a name="ReadAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes"></a>

```go
func ReadAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenValidity`<sup>Required</sup> <a name="RefreshTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity"></a>

```go
func RefreshTokenValidity() *f64
```

- *Type:* *f64

---

##### `SupportedIdentityProviders`<sup>Required</sup> <a name="SupportedIdentityProviders" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders"></a>

```go
func SupportedIdentityProviders() *[]*string
```

- *Type:* *[]*string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `WriteAttributes`<sup>Required</sup> <a name="WriteAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes"></a>

```go
func WriteAttributes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolClientAnalyticsConfiguration <a name="CognitoUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpoolclient"

&cognitouserpoolclient.CognitoUserPoolClientAnalyticsConfiguration {
	ApplicationArn: *string,
	ApplicationId: *string,
	ExternalId: *string,
	RoleArn: *string,
	UserDataShared: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared">UserDataShared</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}. |

---

##### `ApplicationArn`<sup>Optional</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```go
ApplicationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}.

---

##### `UserDataShared`<sup>Optional</sup> <a name="UserDataShared" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```go
UserDataShared interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}.

---

### CognitoUserPoolClientConfig <a name="CognitoUserPoolClientConfig" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpoolclient"

&cognitouserpoolclient.CognitoUserPoolClientConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	UserPoolId: *string,
	AccessTokenValidity: *f64,
	AllowedOauthFlows: *[]*string,
	AllowedOauthFlowsUserPoolClient: interface{},
	AllowedOauthScopes: *[]*string,
	AnalyticsConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration,
	AuthSessionValidity: *f64,
	CallbackUrls: *[]*string,
	DefaultRedirectUri: *string,
	EnablePropagateAdditionalUserContextData: interface{},
	EnableTokenRevocation: interface{},
	ExplicitAuthFlows: *[]*string,
	GenerateSecret: interface{},
	Id: *string,
	IdTokenValidity: *f64,
	LogoutUrls: *[]*string,
	PreventUserExistenceErrors: *string,
	ReadAttributes: *[]*string,
	RefreshTokenValidity: *f64,
	SupportedIdentityProviders: *[]*string,
	TokenValidityUnits: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits,
	WriteAttributes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#name CognitoUserPoolClient#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlows">AllowedOauthFlows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient">AllowedOauthFlowsUserPoolClient</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthScopes">AllowedOauthScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.authSessionValidity">AuthSessionValidity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrls">CallbackUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret">GenerateSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id CognitoUserPoolClient#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity">IdTokenValidity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrls">LogoutUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes">ReadAttributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes">WriteAttributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#name CognitoUserPoolClient#name}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}.

---

##### `AccessTokenValidity`<sup>Optional</sup> <a name="AccessTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity"></a>

```go
AccessTokenValidity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}.

---

##### `AllowedOauthFlows`<sup>Optional</sup> <a name="AllowedOauthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlows"></a>

```go
AllowedOauthFlows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}.

---

##### `AllowedOauthFlowsUserPoolClient`<sup>Optional</sup> <a name="AllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient"></a>

```go
AllowedOauthFlowsUserPoolClient interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `AllowedOauthScopes`<sup>Optional</sup> <a name="AllowedOauthScopes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthScopes"></a>

```go
AllowedOauthScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}.

---

##### `AnalyticsConfiguration`<sup>Optional</sup> <a name="AnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration"></a>

```go
AnalyticsConfiguration CognitoUserPoolClientAnalyticsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

analytics_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}

---

##### `AuthSessionValidity`<sup>Optional</sup> <a name="AuthSessionValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.authSessionValidity"></a>

```go
AuthSessionValidity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}.

---

##### `CallbackUrls`<sup>Optional</sup> <a name="CallbackUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrls"></a>

```go
CallbackUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}.

---

##### `DefaultRedirectUri`<sup>Optional</sup> <a name="DefaultRedirectUri" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri"></a>

```go
DefaultRedirectUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}.

---

##### `EnablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enablePropagateAdditionalUserContextData"></a>

```go
EnablePropagateAdditionalUserContextData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `EnableTokenRevocation`<sup>Optional</sup> <a name="EnableTokenRevocation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation"></a>

```go
EnableTokenRevocation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}.

---

##### `ExplicitAuthFlows`<sup>Optional</sup> <a name="ExplicitAuthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows"></a>

```go
ExplicitAuthFlows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}.

---

##### `GenerateSecret`<sup>Optional</sup> <a name="GenerateSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret"></a>

```go
GenerateSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id CognitoUserPoolClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdTokenValidity`<sup>Optional</sup> <a name="IdTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity"></a>

```go
IdTokenValidity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}.

---

##### `LogoutUrls`<sup>Optional</sup> <a name="LogoutUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrls"></a>

```go
LogoutUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}.

---

##### `PreventUserExistenceErrors`<sup>Optional</sup> <a name="PreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```go
PreventUserExistenceErrors *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}.

---

##### `ReadAttributes`<sup>Optional</sup> <a name="ReadAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes"></a>

```go
ReadAttributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}.

---

##### `RefreshTokenValidity`<sup>Optional</sup> <a name="RefreshTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity"></a>

```go
RefreshTokenValidity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}.

---

##### `SupportedIdentityProviders`<sup>Optional</sup> <a name="SupportedIdentityProviders" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders"></a>

```go
SupportedIdentityProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}.

---

##### `TokenValidityUnits`<sup>Optional</sup> <a name="TokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits"></a>

```go
TokenValidityUnits CognitoUserPoolClientTokenValidityUnits
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

token_validity_units block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}

---

##### `WriteAttributes`<sup>Optional</sup> <a name="WriteAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes"></a>

```go
WriteAttributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}.

---

### CognitoUserPoolClientTokenValidityUnits <a name="CognitoUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpoolclient"

&cognitouserpoolclient.CognitoUserPoolClientTokenValidityUnits {
	AccessToken: *string,
	IdToken: *string,
	RefreshToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken">AccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken">IdToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}.

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken"></a>

```go
IdToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}.

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```go
RefreshToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpoolclient"

cognitouserpoolclient.NewCognitoUserPoolClientAnalyticsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolClientAnalyticsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn">ResetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared">ResetUserDataShared</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationArn` <a name="ResetApplicationArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```go
func ResetApplicationArn()
```

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```go
func ResetApplicationId()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetUserDataShared` <a name="ResetUserDataShared" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```go
func ResetUserDataShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">ApplicationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">UserDataSharedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">UserDataShared</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```go
func ApplicationArnInput() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `UserDataSharedInput`<sup>Optional</sup> <a name="UserDataSharedInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```go
func UserDataSharedInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `UserDataShared`<sup>Required</sup> <a name="UserDataShared" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```go
func UserDataShared() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolClientAnalyticsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---


### CognitoUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpoolclient"

cognitouserpoolclient.NewCognitoUserPoolClientTokenValidityUnitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolClientTokenValidityUnitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken">ResetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```go
func ResetIdToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```go
func ResetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">IdToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```go
func IdTokenInput() *string
```

- *Type:* *string

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```go
func RefreshTokenInput() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```go
func IdToken() *string
```

- *Type:* *string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```go
func RefreshToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolClientTokenValidityUnits
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---



