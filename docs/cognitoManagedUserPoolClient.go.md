# `cognitoManagedUserPoolClient` Submodule <a name="`cognitoManagedUserPoolClient` Submodule" id="@cdktf/provider-aws.cognitoManagedUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoManagedUserPoolClient <a name="CognitoManagedUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client aws_cognito_managed_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

cognitomanageduserpoolclient.NewCognitoManagedUserPoolClient(scope Construct, id *string, config CognitoManagedUserPoolClientConfig) CognitoManagedUserPoolClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig">CognitoManagedUserPoolClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig">CognitoManagedUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration">PutAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits">PutTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAccessTokenValidity">ResetAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlows">ResetAllowedOauthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlowsUserPoolClient">ResetAllowedOauthFlowsUserPoolClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthScopes">ResetAllowedOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAnalyticsConfiguration">ResetAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAuthSessionValidity">ResetAuthSessionValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetCallbackUrls">ResetCallbackUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetDefaultRedirectUri">ResetDefaultRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnablePropagateAdditionalUserContextData">ResetEnablePropagateAdditionalUserContextData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnableTokenRevocation">ResetEnableTokenRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetExplicitAuthFlows">ResetExplicitAuthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetIdTokenValidity">ResetIdTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetLogoutUrls">ResetLogoutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePattern">ResetNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetPreventUserExistenceErrors">ResetPreventUserExistenceErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetReadAttributes">ResetReadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetRefreshTokenValidity">ResetRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetSupportedIdentityProviders">ResetSupportedIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetTokenValidityUnits">ResetTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetWriteAttributes">ResetWriteAttributes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAnalyticsConfiguration` <a name="PutAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration"></a>

```go
func PutAnalyticsConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTokenValidityUnits` <a name="PutTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits"></a>

```go
func PutTokenValidityUnits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessTokenValidity` <a name="ResetAccessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAccessTokenValidity"></a>

```go
func ResetAccessTokenValidity()
```

##### `ResetAllowedOauthFlows` <a name="ResetAllowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlows"></a>

```go
func ResetAllowedOauthFlows()
```

##### `ResetAllowedOauthFlowsUserPoolClient` <a name="ResetAllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlowsUserPoolClient"></a>

```go
func ResetAllowedOauthFlowsUserPoolClient()
```

##### `ResetAllowedOauthScopes` <a name="ResetAllowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthScopes"></a>

```go
func ResetAllowedOauthScopes()
```

##### `ResetAnalyticsConfiguration` <a name="ResetAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAnalyticsConfiguration"></a>

```go
func ResetAnalyticsConfiguration()
```

##### `ResetAuthSessionValidity` <a name="ResetAuthSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAuthSessionValidity"></a>

```go
func ResetAuthSessionValidity()
```

##### `ResetCallbackUrls` <a name="ResetCallbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetCallbackUrls"></a>

```go
func ResetCallbackUrls()
```

##### `ResetDefaultRedirectUri` <a name="ResetDefaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetDefaultRedirectUri"></a>

```go
func ResetDefaultRedirectUri()
```

##### `ResetEnablePropagateAdditionalUserContextData` <a name="ResetEnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnablePropagateAdditionalUserContextData"></a>

```go
func ResetEnablePropagateAdditionalUserContextData()
```

##### `ResetEnableTokenRevocation` <a name="ResetEnableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnableTokenRevocation"></a>

```go
func ResetEnableTokenRevocation()
```

##### `ResetExplicitAuthFlows` <a name="ResetExplicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetExplicitAuthFlows"></a>

```go
func ResetExplicitAuthFlows()
```

##### `ResetIdTokenValidity` <a name="ResetIdTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetIdTokenValidity"></a>

```go
func ResetIdTokenValidity()
```

##### `ResetLogoutUrls` <a name="ResetLogoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetLogoutUrls"></a>

```go
func ResetLogoutUrls()
```

##### `ResetNamePattern` <a name="ResetNamePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePattern"></a>

```go
func ResetNamePattern()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetPreventUserExistenceErrors` <a name="ResetPreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetPreventUserExistenceErrors"></a>

```go
func ResetPreventUserExistenceErrors()
```

##### `ResetReadAttributes` <a name="ResetReadAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetReadAttributes"></a>

```go
func ResetReadAttributes()
```

##### `ResetRefreshTokenValidity` <a name="ResetRefreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetRefreshTokenValidity"></a>

```go
func ResetRefreshTokenValidity()
```

##### `ResetSupportedIdentityProviders` <a name="ResetSupportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetSupportedIdentityProviders"></a>

```go
func ResetSupportedIdentityProviders()
```

##### `ResetTokenValidityUnits` <a name="ResetTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetTokenValidityUnits"></a>

```go
func ResetTokenValidityUnits()
```

##### `ResetWriteAttributes` <a name="ResetWriteAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetWriteAttributes"></a>

```go
func ResetWriteAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

cognitomanageduserpoolclient.CognitoManagedUserPoolClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

cognitomanageduserpoolclient.CognitoManagedUserPoolClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

cognitomanageduserpoolclient.CognitoManagedUserPoolClient_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList">CognitoManagedUserPoolClientAnalyticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList">CognitoManagedUserPoolClientTokenValidityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidityInput">AccessTokenValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsInput">AllowedOauthFlowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClientInput">AllowedOauthFlowsUserPoolClientInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopesInput">AllowedOauthScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfigurationInput">AnalyticsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidityInput">AuthSessionValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrlsInput">CallbackUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUriInput">DefaultRedirectUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextDataInput">EnablePropagateAdditionalUserContextDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocationInput">EnableTokenRevocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlowsInput">ExplicitAuthFlowsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidityInput">IdTokenValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrlsInput">LogoutUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePatternInput">NamePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrorsInput">PreventUserExistenceErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributesInput">ReadAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidityInput">RefreshTokenValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProvidersInput">SupportedIdentityProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnitsInput">TokenValidityUnitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributesInput">WriteAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlows">AllowedOauthFlows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClient">AllowedOauthFlowsUserPoolClient</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopes">AllowedOauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidity">AuthSessionValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrls">CallbackUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidity">IdTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrls">LogoutUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePattern">NamePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributes">ReadAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributes">WriteAttributes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalyticsConfiguration`<sup>Required</sup> <a name="AnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfiguration"></a>

```go
func AnalyticsConfiguration() CognitoManagedUserPoolClientAnalyticsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList">CognitoManagedUserPoolClientAnalyticsConfigurationList</a>

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TokenValidityUnits`<sup>Required</sup> <a name="TokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnits"></a>

```go
func TokenValidityUnits() CognitoManagedUserPoolClientTokenValidityUnitsList
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList">CognitoManagedUserPoolClientTokenValidityUnitsList</a>

---

##### `AccessTokenValidityInput`<sup>Optional</sup> <a name="AccessTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidityInput"></a>

```go
func AccessTokenValidityInput() *f64
```

- *Type:* *f64

---

##### `AllowedOauthFlowsInput`<sup>Optional</sup> <a name="AllowedOauthFlowsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsInput"></a>

```go
func AllowedOauthFlowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOauthFlowsUserPoolClientInput`<sup>Optional</sup> <a name="AllowedOauthFlowsUserPoolClientInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClientInput"></a>

```go
func AllowedOauthFlowsUserPoolClientInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedOauthScopesInput`<sup>Optional</sup> <a name="AllowedOauthScopesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopesInput"></a>

```go
func AllowedOauthScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnalyticsConfigurationInput`<sup>Optional</sup> <a name="AnalyticsConfigurationInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfigurationInput"></a>

```go
func AnalyticsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AuthSessionValidityInput`<sup>Optional</sup> <a name="AuthSessionValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidityInput"></a>

```go
func AuthSessionValidityInput() *f64
```

- *Type:* *f64

---

##### `CallbackUrlsInput`<sup>Optional</sup> <a name="CallbackUrlsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrlsInput"></a>

```go
func CallbackUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRedirectUriInput`<sup>Optional</sup> <a name="DefaultRedirectUriInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUriInput"></a>

```go
func DefaultRedirectUriInput() *string
```

- *Type:* *string

---

##### `EnablePropagateAdditionalUserContextDataInput`<sup>Optional</sup> <a name="EnablePropagateAdditionalUserContextDataInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextDataInput"></a>

```go
func EnablePropagateAdditionalUserContextDataInput() interface{}
```

- *Type:* interface{}

---

##### `EnableTokenRevocationInput`<sup>Optional</sup> <a name="EnableTokenRevocationInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocationInput"></a>

```go
func EnableTokenRevocationInput() interface{}
```

- *Type:* interface{}

---

##### `ExplicitAuthFlowsInput`<sup>Optional</sup> <a name="ExplicitAuthFlowsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlowsInput"></a>

```go
func ExplicitAuthFlowsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdTokenValidityInput`<sup>Optional</sup> <a name="IdTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidityInput"></a>

```go
func IdTokenValidityInput() *f64
```

- *Type:* *f64

---

##### `LogoutUrlsInput`<sup>Optional</sup> <a name="LogoutUrlsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrlsInput"></a>

```go
func LogoutUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamePatternInput`<sup>Optional</sup> <a name="NamePatternInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePatternInput"></a>

```go
func NamePatternInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `PreventUserExistenceErrorsInput`<sup>Optional</sup> <a name="PreventUserExistenceErrorsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```go
func PreventUserExistenceErrorsInput() *string
```

- *Type:* *string

---

##### `ReadAttributesInput`<sup>Optional</sup> <a name="ReadAttributesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributesInput"></a>

```go
func ReadAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenValidityInput`<sup>Optional</sup> <a name="RefreshTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidityInput"></a>

```go
func RefreshTokenValidityInput() *f64
```

- *Type:* *f64

---

##### `SupportedIdentityProvidersInput`<sup>Optional</sup> <a name="SupportedIdentityProvidersInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProvidersInput"></a>

```go
func SupportedIdentityProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenValidityUnitsInput`<sup>Optional</sup> <a name="TokenValidityUnitsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnitsInput"></a>

```go
func TokenValidityUnitsInput() interface{}
```

- *Type:* interface{}

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `WriteAttributesInput`<sup>Optional</sup> <a name="WriteAttributesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributesInput"></a>

```go
func WriteAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessTokenValidity`<sup>Required</sup> <a name="AccessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidity"></a>

```go
func AccessTokenValidity() *f64
```

- *Type:* *f64

---

##### `AllowedOauthFlows`<sup>Required</sup> <a name="AllowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlows"></a>

```go
func AllowedOauthFlows() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOauthFlowsUserPoolClient`<sup>Required</sup> <a name="AllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```go
func AllowedOauthFlowsUserPoolClient() interface{}
```

- *Type:* interface{}

---

##### `AllowedOauthScopes`<sup>Required</sup> <a name="AllowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopes"></a>

```go
func AllowedOauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `AuthSessionValidity`<sup>Required</sup> <a name="AuthSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidity"></a>

```go
func AuthSessionValidity() *f64
```

- *Type:* *f64

---

##### `CallbackUrls`<sup>Required</sup> <a name="CallbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrls"></a>

```go
func CallbackUrls() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRedirectUri`<sup>Required</sup> <a name="DefaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUri"></a>

```go
func DefaultRedirectUri() *string
```

- *Type:* *string

---

##### `EnablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```go
func EnablePropagateAdditionalUserContextData() interface{}
```

- *Type:* interface{}

---

##### `EnableTokenRevocation`<sup>Required</sup> <a name="EnableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocation"></a>

```go
func EnableTokenRevocation() interface{}
```

- *Type:* interface{}

---

##### `ExplicitAuthFlows`<sup>Required</sup> <a name="ExplicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlows"></a>

```go
func ExplicitAuthFlows() *[]*string
```

- *Type:* *[]*string

---

##### `IdTokenValidity`<sup>Required</sup> <a name="IdTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidity"></a>

```go
func IdTokenValidity() *f64
```

- *Type:* *f64

---

##### `LogoutUrls`<sup>Required</sup> <a name="LogoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrls"></a>

```go
func LogoutUrls() *[]*string
```

- *Type:* *[]*string

---

##### `NamePattern`<sup>Required</sup> <a name="NamePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePattern"></a>

```go
func NamePattern() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `PreventUserExistenceErrors`<sup>Required</sup> <a name="PreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrors"></a>

```go
func PreventUserExistenceErrors() *string
```

- *Type:* *string

---

##### `ReadAttributes`<sup>Required</sup> <a name="ReadAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributes"></a>

```go
func ReadAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenValidity`<sup>Required</sup> <a name="RefreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidity"></a>

```go
func RefreshTokenValidity() *f64
```

- *Type:* *f64

---

##### `SupportedIdentityProviders`<sup>Required</sup> <a name="SupportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProviders"></a>

```go
func SupportedIdentityProviders() *[]*string
```

- *Type:* *[]*string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `WriteAttributes`<sup>Required</sup> <a name="WriteAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributes"></a>

```go
func WriteAttributes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoManagedUserPoolClientAnalyticsConfiguration <a name="CognitoManagedUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

&cognitomanageduserpoolclient.CognitoManagedUserPoolClientAnalyticsConfiguration {
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
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.userDataShared">UserDataShared</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}. |

---

##### `ApplicationArn`<sup>Optional</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```go
ApplicationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}.

---

##### `UserDataShared`<sup>Optional</sup> <a name="UserDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```go
UserDataShared interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}.

---

### CognitoManagedUserPoolClientConfig <a name="CognitoManagedUserPoolClientConfig" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

&cognitomanageduserpoolclient.CognitoManagedUserPoolClientConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UserPoolId: *string,
	AccessTokenValidity: *f64,
	AllowedOauthFlows: *[]*string,
	AllowedOauthFlowsUserPoolClient: interface{},
	AllowedOauthScopes: *[]*string,
	AnalyticsConfiguration: interface{},
	AuthSessionValidity: *f64,
	CallbackUrls: *[]*string,
	DefaultRedirectUri: *string,
	EnablePropagateAdditionalUserContextData: interface{},
	EnableTokenRevocation: interface{},
	ExplicitAuthFlows: *[]*string,
	IdTokenValidity: *f64,
	LogoutUrls: *[]*string,
	NamePattern: *string,
	NamePrefix: *string,
	PreventUserExistenceErrors: *string,
	ReadAttributes: *[]*string,
	RefreshTokenValidity: *f64,
	SupportedIdentityProviders: *[]*string,
	TokenValidityUnits: interface{},
	WriteAttributes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlows">AllowedOauthFlows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient">AllowedOauthFlowsUserPoolClient</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthScopes">AllowedOauthScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code>interface{}</code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.authSessionValidity">AuthSessionValidity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.callbackUrls">CallbackUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.idTokenValidity">IdTokenValidity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.logoutUrls">LogoutUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePattern">NamePattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.readAttributes">ReadAttributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code>interface{}</code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.writeAttributes">WriteAttributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}.

---

##### `AccessTokenValidity`<sup>Optional</sup> <a name="AccessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.accessTokenValidity"></a>

```go
AccessTokenValidity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}.

---

##### `AllowedOauthFlows`<sup>Optional</sup> <a name="AllowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlows"></a>

```go
AllowedOauthFlows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}.

---

##### `AllowedOauthFlowsUserPoolClient`<sup>Optional</sup> <a name="AllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient"></a>

```go
AllowedOauthFlowsUserPoolClient interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `AllowedOauthScopes`<sup>Optional</sup> <a name="AllowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthScopes"></a>

```go
AllowedOauthScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}.

---

##### `AnalyticsConfiguration`<sup>Optional</sup> <a name="AnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.analyticsConfiguration"></a>

```go
AnalyticsConfiguration interface{}
```

- *Type:* interface{}

analytics_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#analytics_configuration CognitoManagedUserPoolClient#analytics_configuration}

---

##### `AuthSessionValidity`<sup>Optional</sup> <a name="AuthSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.authSessionValidity"></a>

```go
AuthSessionValidity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}.

---

##### `CallbackUrls`<sup>Optional</sup> <a name="CallbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.callbackUrls"></a>

```go
CallbackUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}.

---

##### `DefaultRedirectUri`<sup>Optional</sup> <a name="DefaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.defaultRedirectUri"></a>

```go
DefaultRedirectUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}.

---

##### `EnablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enablePropagateAdditionalUserContextData"></a>

```go
EnablePropagateAdditionalUserContextData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `EnableTokenRevocation`<sup>Optional</sup> <a name="EnableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enableTokenRevocation"></a>

```go
EnableTokenRevocation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}.

---

##### `ExplicitAuthFlows`<sup>Optional</sup> <a name="ExplicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.explicitAuthFlows"></a>

```go
ExplicitAuthFlows *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}.

---

##### `IdTokenValidity`<sup>Optional</sup> <a name="IdTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.idTokenValidity"></a>

```go
IdTokenValidity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}.

---

##### `LogoutUrls`<sup>Optional</sup> <a name="LogoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.logoutUrls"></a>

```go
LogoutUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}.

---

##### `NamePattern`<sup>Optional</sup> <a name="NamePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePattern"></a>

```go
NamePattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}.

---

##### `PreventUserExistenceErrors`<sup>Optional</sup> <a name="PreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```go
PreventUserExistenceErrors *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}.

---

##### `ReadAttributes`<sup>Optional</sup> <a name="ReadAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.readAttributes"></a>

```go
ReadAttributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}.

---

##### `RefreshTokenValidity`<sup>Optional</sup> <a name="RefreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.refreshTokenValidity"></a>

```go
RefreshTokenValidity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}.

---

##### `SupportedIdentityProviders`<sup>Optional</sup> <a name="SupportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.supportedIdentityProviders"></a>

```go
SupportedIdentityProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}.

---

##### `TokenValidityUnits`<sup>Optional</sup> <a name="TokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.tokenValidityUnits"></a>

```go
TokenValidityUnits interface{}
```

- *Type:* interface{}

token_validity_units block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#token_validity_units CognitoManagedUserPoolClient#token_validity_units}

---

##### `WriteAttributes`<sup>Optional</sup> <a name="WriteAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.writeAttributes"></a>

```go
WriteAttributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}.

---

### CognitoManagedUserPoolClientTokenValidityUnits <a name="CognitoManagedUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

&cognitomanageduserpoolclient.CognitoManagedUserPoolClientTokenValidityUnits {
	AccessToken: *string,
	IdToken: *string,
	RefreshToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.accessToken">AccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.idToken">IdToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}.

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.idToken"></a>

```go
IdToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}.

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```go
RefreshToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoManagedUserPoolClientAnalyticsConfigurationList <a name="CognitoManagedUserPoolClientAnalyticsConfigurationList" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

cognitomanageduserpoolclient.NewCognitoManagedUserPoolClientAnalyticsConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CognitoManagedUserPoolClientAnalyticsConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get"></a>

```go
func Get(index *f64) CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

cognitomanageduserpoolclient.NewCognitoManagedUserPoolClientAnalyticsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn">ResetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared">ResetUserDataShared</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationArn` <a name="ResetApplicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```go
func ResetApplicationArn()
```

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```go
func ResetApplicationId()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetUserDataShared` <a name="ResetUserDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```go
func ResetUserDataShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">ApplicationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">UserDataSharedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">UserDataShared</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```go
func ApplicationArnInput() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `UserDataSharedInput`<sup>Optional</sup> <a name="UserDataSharedInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```go
func UserDataSharedInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `UserDataShared`<sup>Required</sup> <a name="UserDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```go
func UserDataShared() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoManagedUserPoolClientTokenValidityUnitsList <a name="CognitoManagedUserPoolClientTokenValidityUnitsList" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

cognitomanageduserpoolclient.NewCognitoManagedUserPoolClientTokenValidityUnitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CognitoManagedUserPoolClientTokenValidityUnitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get"></a>

```go
func Get(index *f64) CognitoManagedUserPoolClientTokenValidityUnitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoManagedUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoManagedUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitomanageduserpoolclient"

cognitomanageduserpoolclient.NewCognitoManagedUserPoolClientTokenValidityUnitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CognitoManagedUserPoolClientTokenValidityUnitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetIdToken">ResetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```go
func ResetIdToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```go
func ResetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idToken">IdToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```go
func IdTokenInput() *string
```

- *Type:* *string

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```go
func RefreshTokenInput() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```go
func IdToken() *string
```

- *Type:* *string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```go
func RefreshToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



