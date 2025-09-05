# `cognitoUserPoolClient` Submodule <a name="`cognitoUserPoolClient` Submodule" id="@cdktf/provider-aws.cognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolClient <a name="CognitoUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client aws_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClient(Construct Scope, string Id, CognitoUserPoolClientConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig">CognitoUserPoolClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig">CognitoUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration">PutAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putRefreshTokenRotation">PutRefreshTokenRotation</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity">ResetIdTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrls">ResetLogoutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors">ResetPreventUserExistenceErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes">ResetReadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenRotation">ResetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity">ResetRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders">ResetSupportedIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits">ResetTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes">ResetWriteAttributes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnalyticsConfiguration` <a name="PutAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration"></a>

```csharp
private void PutAnalyticsConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutRefreshTokenRotation` <a name="PutRefreshTokenRotation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putRefreshTokenRotation"></a>

```csharp
private void PutRefreshTokenRotation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putRefreshTokenRotation.parameter.value"></a>

- *Type:* object

---

##### `PutTokenValidityUnits` <a name="PutTokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits"></a>

```csharp
private void PutTokenValidityUnits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessTokenValidity` <a name="ResetAccessTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity"></a>

```csharp
private void ResetAccessTokenValidity()
```

##### `ResetAllowedOauthFlows` <a name="ResetAllowedOauthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlows"></a>

```csharp
private void ResetAllowedOauthFlows()
```

##### `ResetAllowedOauthFlowsUserPoolClient` <a name="ResetAllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlowsUserPoolClient"></a>

```csharp
private void ResetAllowedOauthFlowsUserPoolClient()
```

##### `ResetAllowedOauthScopes` <a name="ResetAllowedOauthScopes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthScopes"></a>

```csharp
private void ResetAllowedOauthScopes()
```

##### `ResetAnalyticsConfiguration` <a name="ResetAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration"></a>

```csharp
private void ResetAnalyticsConfiguration()
```

##### `ResetAuthSessionValidity` <a name="ResetAuthSessionValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetAuthSessionValidity"></a>

```csharp
private void ResetAuthSessionValidity()
```

##### `ResetCallbackUrls` <a name="ResetCallbackUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrls"></a>

```csharp
private void ResetCallbackUrls()
```

##### `ResetDefaultRedirectUri` <a name="ResetDefaultRedirectUri" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri"></a>

```csharp
private void ResetDefaultRedirectUri()
```

##### `ResetEnablePropagateAdditionalUserContextData` <a name="ResetEnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetEnablePropagateAdditionalUserContextData"></a>

```csharp
private void ResetEnablePropagateAdditionalUserContextData()
```

##### `ResetEnableTokenRevocation` <a name="ResetEnableTokenRevocation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation"></a>

```csharp
private void ResetEnableTokenRevocation()
```

##### `ResetExplicitAuthFlows` <a name="ResetExplicitAuthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows"></a>

```csharp
private void ResetExplicitAuthFlows()
```

##### `ResetGenerateSecret` <a name="ResetGenerateSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret"></a>

```csharp
private void ResetGenerateSecret()
```

##### `ResetIdTokenValidity` <a name="ResetIdTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity"></a>

```csharp
private void ResetIdTokenValidity()
```

##### `ResetLogoutUrls` <a name="ResetLogoutUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrls"></a>

```csharp
private void ResetLogoutUrls()
```

##### `ResetPreventUserExistenceErrors` <a name="ResetPreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors"></a>

```csharp
private void ResetPreventUserExistenceErrors()
```

##### `ResetReadAttributes` <a name="ResetReadAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes"></a>

```csharp
private void ResetReadAttributes()
```

##### `ResetRefreshTokenRotation` <a name="ResetRefreshTokenRotation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenRotation"></a>

```csharp
private void ResetRefreshTokenRotation()
```

##### `ResetRefreshTokenValidity` <a name="ResetRefreshTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity"></a>

```csharp
private void ResetRefreshTokenValidity()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSupportedIdentityProviders` <a name="ResetSupportedIdentityProviders" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders"></a>

```csharp
private void ResetSupportedIdentityProviders()
```

##### `ResetTokenValidityUnits` <a name="ResetTokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits"></a>

```csharp
private void ResetTokenValidityUnits()
```

##### `ResetWriteAttributes` <a name="ResetWriteAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes"></a>

```csharp
private void ResetWriteAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoUserPoolClient resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoUserPoolClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoUserPoolClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoUserPoolClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoUserPoolClient.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CognitoUserPoolClient resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolClient to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList">CognitoUserPoolClientAnalyticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList">CognitoUserPoolClientRefreshTokenRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList">CognitoUserPoolClientTokenValidityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput">AccessTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsInput">AllowedOauthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClientInput">AllowedOauthFlowsUserPoolClientInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopesInput">AllowedOauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput">AnalyticsConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidityInput">AuthSessionValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrlsInput">CallbackUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput">DefaultRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextDataInput">EnablePropagateAdditionalUserContextDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput">EnableTokenRevocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput">ExplicitAuthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput">GenerateSecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput">IdTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrlsInput">LogoutUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput">PreventUserExistenceErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput">ReadAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotationInput">RefreshTokenRotationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput">RefreshTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput">SupportedIdentityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput">TokenValidityUnitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput">WriteAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlows">AllowedOauthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient">AllowedOauthFlowsUserPoolClient</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopes">AllowedOauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidity">AuthSessionValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrls">CallbackUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret">GenerateSecret</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity">IdTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrls">LogoutUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes">ReadAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes">WriteAttributes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AnalyticsConfiguration`<sup>Required</sup> <a name="AnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration"></a>

```csharp
public CognitoUserPoolClientAnalyticsConfigurationList AnalyticsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList">CognitoUserPoolClientAnalyticsConfigurationList</a>

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RefreshTokenRotation`<sup>Required</sup> <a name="RefreshTokenRotation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotation"></a>

```csharp
public CognitoUserPoolClientRefreshTokenRotationList RefreshTokenRotation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList">CognitoUserPoolClientRefreshTokenRotationList</a>

---

##### `TokenValidityUnits`<sup>Required</sup> <a name="TokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits"></a>

```csharp
public CognitoUserPoolClientTokenValidityUnitsList TokenValidityUnits { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList">CognitoUserPoolClientTokenValidityUnitsList</a>

---

##### `AccessTokenValidityInput`<sup>Optional</sup> <a name="AccessTokenValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput"></a>

```csharp
public double AccessTokenValidityInput { get; }
```

- *Type:* double

---

##### `AllowedOauthFlowsInput`<sup>Optional</sup> <a name="AllowedOauthFlowsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsInput"></a>

```csharp
public string[] AllowedOauthFlowsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOauthFlowsUserPoolClientInput`<sup>Optional</sup> <a name="AllowedOauthFlowsUserPoolClientInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClientInput"></a>

```csharp
public object AllowedOauthFlowsUserPoolClientInput { get; }
```

- *Type:* object

---

##### `AllowedOauthScopesInput`<sup>Optional</sup> <a name="AllowedOauthScopesInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopesInput"></a>

```csharp
public string[] AllowedOauthScopesInput { get; }
```

- *Type:* string[]

---

##### `AnalyticsConfigurationInput`<sup>Optional</sup> <a name="AnalyticsConfigurationInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput"></a>

```csharp
public object AnalyticsConfigurationInput { get; }
```

- *Type:* object

---

##### `AuthSessionValidityInput`<sup>Optional</sup> <a name="AuthSessionValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidityInput"></a>

```csharp
public double AuthSessionValidityInput { get; }
```

- *Type:* double

---

##### `CallbackUrlsInput`<sup>Optional</sup> <a name="CallbackUrlsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrlsInput"></a>

```csharp
public string[] CallbackUrlsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRedirectUriInput`<sup>Optional</sup> <a name="DefaultRedirectUriInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput"></a>

```csharp
public string DefaultRedirectUriInput { get; }
```

- *Type:* string

---

##### `EnablePropagateAdditionalUserContextDataInput`<sup>Optional</sup> <a name="EnablePropagateAdditionalUserContextDataInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextDataInput"></a>

```csharp
public object EnablePropagateAdditionalUserContextDataInput { get; }
```

- *Type:* object

---

##### `EnableTokenRevocationInput`<sup>Optional</sup> <a name="EnableTokenRevocationInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput"></a>

```csharp
public object EnableTokenRevocationInput { get; }
```

- *Type:* object

---

##### `ExplicitAuthFlowsInput`<sup>Optional</sup> <a name="ExplicitAuthFlowsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput"></a>

```csharp
public string[] ExplicitAuthFlowsInput { get; }
```

- *Type:* string[]

---

##### `GenerateSecretInput`<sup>Optional</sup> <a name="GenerateSecretInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput"></a>

```csharp
public object GenerateSecretInput { get; }
```

- *Type:* object

---

##### `IdTokenValidityInput`<sup>Optional</sup> <a name="IdTokenValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput"></a>

```csharp
public double IdTokenValidityInput { get; }
```

- *Type:* double

---

##### `LogoutUrlsInput`<sup>Optional</sup> <a name="LogoutUrlsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrlsInput"></a>

```csharp
public string[] LogoutUrlsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreventUserExistenceErrorsInput`<sup>Optional</sup> <a name="PreventUserExistenceErrorsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```csharp
public string PreventUserExistenceErrorsInput { get; }
```

- *Type:* string

---

##### `ReadAttributesInput`<sup>Optional</sup> <a name="ReadAttributesInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput"></a>

```csharp
public string[] ReadAttributesInput { get; }
```

- *Type:* string[]

---

##### `RefreshTokenRotationInput`<sup>Optional</sup> <a name="RefreshTokenRotationInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenRotationInput"></a>

```csharp
public object RefreshTokenRotationInput { get; }
```

- *Type:* object

---

##### `RefreshTokenValidityInput`<sup>Optional</sup> <a name="RefreshTokenValidityInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput"></a>

```csharp
public double RefreshTokenValidityInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SupportedIdentityProvidersInput`<sup>Optional</sup> <a name="SupportedIdentityProvidersInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput"></a>

```csharp
public string[] SupportedIdentityProvidersInput { get; }
```

- *Type:* string[]

---

##### `TokenValidityUnitsInput`<sup>Optional</sup> <a name="TokenValidityUnitsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput"></a>

```csharp
public object TokenValidityUnitsInput { get; }
```

- *Type:* object

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `WriteAttributesInput`<sup>Optional</sup> <a name="WriteAttributesInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput"></a>

```csharp
public string[] WriteAttributesInput { get; }
```

- *Type:* string[]

---

##### `AccessTokenValidity`<sup>Required</sup> <a name="AccessTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity"></a>

```csharp
public double AccessTokenValidity { get; }
```

- *Type:* double

---

##### `AllowedOauthFlows`<sup>Required</sup> <a name="AllowedOauthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlows"></a>

```csharp
public string[] AllowedOauthFlows { get; }
```

- *Type:* string[]

---

##### `AllowedOauthFlowsUserPoolClient`<sup>Required</sup> <a name="AllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```csharp
public object AllowedOauthFlowsUserPoolClient { get; }
```

- *Type:* object

---

##### `AllowedOauthScopes`<sup>Required</sup> <a name="AllowedOauthScopes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopes"></a>

```csharp
public string[] AllowedOauthScopes { get; }
```

- *Type:* string[]

---

##### `AuthSessionValidity`<sup>Required</sup> <a name="AuthSessionValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.authSessionValidity"></a>

```csharp
public double AuthSessionValidity { get; }
```

- *Type:* double

---

##### `CallbackUrls`<sup>Required</sup> <a name="CallbackUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrls"></a>

```csharp
public string[] CallbackUrls { get; }
```

- *Type:* string[]

---

##### `DefaultRedirectUri`<sup>Required</sup> <a name="DefaultRedirectUri" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri"></a>

```csharp
public string DefaultRedirectUri { get; }
```

- *Type:* string

---

##### `EnablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```csharp
public object EnablePropagateAdditionalUserContextData { get; }
```

- *Type:* object

---

##### `EnableTokenRevocation`<sup>Required</sup> <a name="EnableTokenRevocation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation"></a>

```csharp
public object EnableTokenRevocation { get; }
```

- *Type:* object

---

##### `ExplicitAuthFlows`<sup>Required</sup> <a name="ExplicitAuthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows"></a>

```csharp
public string[] ExplicitAuthFlows { get; }
```

- *Type:* string[]

---

##### `GenerateSecret`<sup>Required</sup> <a name="GenerateSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret"></a>

```csharp
public object GenerateSecret { get; }
```

- *Type:* object

---

##### `IdTokenValidity`<sup>Required</sup> <a name="IdTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity"></a>

```csharp
public double IdTokenValidity { get; }
```

- *Type:* double

---

##### `LogoutUrls`<sup>Required</sup> <a name="LogoutUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrls"></a>

```csharp
public string[] LogoutUrls { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PreventUserExistenceErrors`<sup>Required</sup> <a name="PreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```csharp
public string PreventUserExistenceErrors { get; }
```

- *Type:* string

---

##### `ReadAttributes`<sup>Required</sup> <a name="ReadAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes"></a>

```csharp
public string[] ReadAttributes { get; }
```

- *Type:* string[]

---

##### `RefreshTokenValidity`<sup>Required</sup> <a name="RefreshTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity"></a>

```csharp
public double RefreshTokenValidity { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SupportedIdentityProviders`<sup>Required</sup> <a name="SupportedIdentityProviders" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders"></a>

```csharp
public string[] SupportedIdentityProviders { get; }
```

- *Type:* string[]

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `WriteAttributes`<sup>Required</sup> <a name="WriteAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes"></a>

```csharp
public string[] WriteAttributes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolClientAnalyticsConfiguration <a name="CognitoUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClientAnalyticsConfiguration {
    string ApplicationArn = null,
    string ApplicationId = null,
    string ExternalId = null,
    string RoleArn = null,
    object UserDataShared = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared">UserDataShared</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}. |

---

##### `ApplicationArn`<sup>Optional</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}.

---

##### `UserDataShared`<sup>Optional</sup> <a name="UserDataShared" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```csharp
public object UserDataShared { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}.

---

### CognitoUserPoolClientConfig <a name="CognitoUserPoolClientConfig" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClientConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string UserPoolId,
    double AccessTokenValidity = null,
    string[] AllowedOauthFlows = null,
    object AllowedOauthFlowsUserPoolClient = null,
    string[] AllowedOauthScopes = null,
    object AnalyticsConfiguration = null,
    double AuthSessionValidity = null,
    string[] CallbackUrls = null,
    string DefaultRedirectUri = null,
    object EnablePropagateAdditionalUserContextData = null,
    object EnableTokenRevocation = null,
    string[] ExplicitAuthFlows = null,
    object GenerateSecret = null,
    double IdTokenValidity = null,
    string[] LogoutUrls = null,
    string PreventUserExistenceErrors = null,
    string[] ReadAttributes = null,
    object RefreshTokenRotation = null,
    double RefreshTokenValidity = null,
    string Region = null,
    string[] SupportedIdentityProviders = null,
    object TokenValidityUnits = null,
    string[] WriteAttributes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#name CognitoUserPoolClient#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlows">AllowedOauthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient">AllowedOauthFlowsUserPoolClient</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthScopes">AllowedOauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code>object</code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.authSessionValidity">AuthSessionValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrls">CallbackUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret">GenerateSecret</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity">IdTokenValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrls">LogoutUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes">ReadAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code>object</code> | refresh_token_rotation block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code>object</code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes">WriteAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#name CognitoUserPoolClient#name}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}.

---

##### `AccessTokenValidity`<sup>Optional</sup> <a name="AccessTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity"></a>

```csharp
public double AccessTokenValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}.

---

##### `AllowedOauthFlows`<sup>Optional</sup> <a name="AllowedOauthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlows"></a>

```csharp
public string[] AllowedOauthFlows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}.

---

##### `AllowedOauthFlowsUserPoolClient`<sup>Optional</sup> <a name="AllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient"></a>

```csharp
public object AllowedOauthFlowsUserPoolClient { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `AllowedOauthScopes`<sup>Optional</sup> <a name="AllowedOauthScopes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthScopes"></a>

```csharp
public string[] AllowedOauthScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}.

---

##### `AnalyticsConfiguration`<sup>Optional</sup> <a name="AnalyticsConfiguration" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration"></a>

```csharp
public object AnalyticsConfiguration { get; set; }
```

- *Type:* object

analytics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}

---

##### `AuthSessionValidity`<sup>Optional</sup> <a name="AuthSessionValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.authSessionValidity"></a>

```csharp
public double AuthSessionValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}.

---

##### `CallbackUrls`<sup>Optional</sup> <a name="CallbackUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrls"></a>

```csharp
public string[] CallbackUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}.

---

##### `DefaultRedirectUri`<sup>Optional</sup> <a name="DefaultRedirectUri" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri"></a>

```csharp
public string DefaultRedirectUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}.

---

##### `EnablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enablePropagateAdditionalUserContextData"></a>

```csharp
public object EnablePropagateAdditionalUserContextData { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `EnableTokenRevocation`<sup>Optional</sup> <a name="EnableTokenRevocation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation"></a>

```csharp
public object EnableTokenRevocation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}.

---

##### `ExplicitAuthFlows`<sup>Optional</sup> <a name="ExplicitAuthFlows" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows"></a>

```csharp
public string[] ExplicitAuthFlows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}.

---

##### `GenerateSecret`<sup>Optional</sup> <a name="GenerateSecret" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret"></a>

```csharp
public object GenerateSecret { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}.

---

##### `IdTokenValidity`<sup>Optional</sup> <a name="IdTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity"></a>

```csharp
public double IdTokenValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}.

---

##### `LogoutUrls`<sup>Optional</sup> <a name="LogoutUrls" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrls"></a>

```csharp
public string[] LogoutUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}.

---

##### `PreventUserExistenceErrors`<sup>Optional</sup> <a name="PreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```csharp
public string PreventUserExistenceErrors { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}.

---

##### `ReadAttributes`<sup>Optional</sup> <a name="ReadAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes"></a>

```csharp
public string[] ReadAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}.

---

##### `RefreshTokenRotation`<sup>Optional</sup> <a name="RefreshTokenRotation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenRotation"></a>

```csharp
public object RefreshTokenRotation { get; set; }
```

- *Type:* object

refresh_token_rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#refresh_token_rotation CognitoUserPoolClient#refresh_token_rotation}

---

##### `RefreshTokenValidity`<sup>Optional</sup> <a name="RefreshTokenValidity" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity"></a>

```csharp
public double RefreshTokenValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#region CognitoUserPoolClient#region}

---

##### `SupportedIdentityProviders`<sup>Optional</sup> <a name="SupportedIdentityProviders" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders"></a>

```csharp
public string[] SupportedIdentityProviders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}.

---

##### `TokenValidityUnits`<sup>Optional</sup> <a name="TokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits"></a>

```csharp
public object TokenValidityUnits { get; set; }
```

- *Type:* object

token_validity_units block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}

---

##### `WriteAttributes`<sup>Optional</sup> <a name="WriteAttributes" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes"></a>

```csharp
public string[] WriteAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}.

---

### CognitoUserPoolClientRefreshTokenRotation <a name="CognitoUserPoolClientRefreshTokenRotation" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClientRefreshTokenRotation {
    string Feature,
    double RetryGracePeriodSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.feature">Feature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#feature CognitoUserPoolClient#feature}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.retryGracePeriodSeconds">RetryGracePeriodSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#retry_grace_period_seconds CognitoUserPoolClient#retry_grace_period_seconds}. |

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.feature"></a>

```csharp
public string Feature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#feature CognitoUserPoolClient#feature}.

---

##### `RetryGracePeriodSeconds`<sup>Optional</sup> <a name="RetryGracePeriodSeconds" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotation.property.retryGracePeriodSeconds"></a>

```csharp
public double RetryGracePeriodSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#retry_grace_period_seconds CognitoUserPoolClient#retry_grace_period_seconds}.

---

### CognitoUserPoolClientTokenValidityUnits <a name="CognitoUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClientTokenValidityUnits {
    string AccessToken = null,
    string IdToken = null,
    string RefreshToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken">IdToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken">RefreshToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}.

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken"></a>

```csharp
public string IdToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}.

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```csharp
public string RefreshToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolClientAnalyticsConfigurationList <a name="CognitoUserPoolClientAnalyticsConfigurationList" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClientAnalyticsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.get"></a>

```csharp
private CognitoUserPoolClientAnalyticsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClientAnalyticsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationArn` <a name="ResetApplicationArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```csharp
private void ResetApplicationArn()
```

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetUserDataShared` <a name="ResetUserDataShared" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```csharp
private void ResetUserDataShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">ApplicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">UserDataSharedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">UserDataShared</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```csharp
public string ApplicationArnInput { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `UserDataSharedInput`<sup>Optional</sup> <a name="UserDataSharedInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```csharp
public object UserDataSharedInput { get; }
```

- *Type:* object

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `UserDataShared`<sup>Required</sup> <a name="UserDataShared" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```csharp
public object UserDataShared { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoUserPoolClientRefreshTokenRotationList <a name="CognitoUserPoolClientRefreshTokenRotationList" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClientRefreshTokenRotationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.get"></a>

```csharp
private CognitoUserPoolClientRefreshTokenRotationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoUserPoolClientRefreshTokenRotationOutputReference <a name="CognitoUserPoolClientRefreshTokenRotationOutputReference" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClientRefreshTokenRotationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resetRetryGracePeriodSeconds">ResetRetryGracePeriodSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetryGracePeriodSeconds` <a name="ResetRetryGracePeriodSeconds" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.resetRetryGracePeriodSeconds"></a>

```csharp
private void ResetRetryGracePeriodSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.featureInput">FeatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSecondsInput">RetryGracePeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.feature">Feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSeconds">RetryGracePeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.featureInput"></a>

```csharp
public string FeatureInput { get; }
```

- *Type:* string

---

##### `RetryGracePeriodSecondsInput`<sup>Optional</sup> <a name="RetryGracePeriodSecondsInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSecondsInput"></a>

```csharp
public double RetryGracePeriodSecondsInput { get; }
```

- *Type:* double

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.feature"></a>

```csharp
public string Feature { get; }
```

- *Type:* string

---

##### `RetryGracePeriodSeconds`<sup>Required</sup> <a name="RetryGracePeriodSeconds" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSeconds"></a>

```csharp
public double RetryGracePeriodSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientRefreshTokenRotationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoUserPoolClientTokenValidityUnitsList <a name="CognitoUserPoolClientTokenValidityUnitsList" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClientTokenValidityUnitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.get"></a>

```csharp
private CognitoUserPoolClientTokenValidityUnitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolClientTokenValidityUnitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```csharp
private void ResetIdToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```csharp
private void ResetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">IdToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```csharp
public string IdTokenInput { get; }
```

- *Type:* string

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```csharp
public string RefreshTokenInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```csharp
public string IdToken { get; }
```

- *Type:* string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```csharp
public string RefreshToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



