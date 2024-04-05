# `cognitoManagedUserPoolClient` Submodule <a name="`cognitoManagedUserPoolClient` Submodule" id="@cdktf/provider-aws.cognitoManagedUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoManagedUserPoolClient <a name="CognitoManagedUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client aws_cognito_managed_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedUserPoolClient(Construct Scope, string Id, CognitoManagedUserPoolClientConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig">CognitoManagedUserPoolClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig">CognitoManagedUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnalyticsConfiguration` <a name="PutAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration"></a>

```csharp
private void PutAnalyticsConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTokenValidityUnits` <a name="PutTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits"></a>

```csharp
private void PutTokenValidityUnits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessTokenValidity` <a name="ResetAccessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAccessTokenValidity"></a>

```csharp
private void ResetAccessTokenValidity()
```

##### `ResetAllowedOauthFlows` <a name="ResetAllowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlows"></a>

```csharp
private void ResetAllowedOauthFlows()
```

##### `ResetAllowedOauthFlowsUserPoolClient` <a name="ResetAllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthFlowsUserPoolClient"></a>

```csharp
private void ResetAllowedOauthFlowsUserPoolClient()
```

##### `ResetAllowedOauthScopes` <a name="ResetAllowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAllowedOauthScopes"></a>

```csharp
private void ResetAllowedOauthScopes()
```

##### `ResetAnalyticsConfiguration` <a name="ResetAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAnalyticsConfiguration"></a>

```csharp
private void ResetAnalyticsConfiguration()
```

##### `ResetAuthSessionValidity` <a name="ResetAuthSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetAuthSessionValidity"></a>

```csharp
private void ResetAuthSessionValidity()
```

##### `ResetCallbackUrls` <a name="ResetCallbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetCallbackUrls"></a>

```csharp
private void ResetCallbackUrls()
```

##### `ResetDefaultRedirectUri` <a name="ResetDefaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetDefaultRedirectUri"></a>

```csharp
private void ResetDefaultRedirectUri()
```

##### `ResetEnablePropagateAdditionalUserContextData` <a name="ResetEnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnablePropagateAdditionalUserContextData"></a>

```csharp
private void ResetEnablePropagateAdditionalUserContextData()
```

##### `ResetEnableTokenRevocation` <a name="ResetEnableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetEnableTokenRevocation"></a>

```csharp
private void ResetEnableTokenRevocation()
```

##### `ResetExplicitAuthFlows` <a name="ResetExplicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetExplicitAuthFlows"></a>

```csharp
private void ResetExplicitAuthFlows()
```

##### `ResetIdTokenValidity` <a name="ResetIdTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetIdTokenValidity"></a>

```csharp
private void ResetIdTokenValidity()
```

##### `ResetLogoutUrls` <a name="ResetLogoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetLogoutUrls"></a>

```csharp
private void ResetLogoutUrls()
```

##### `ResetNamePattern` <a name="ResetNamePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePattern"></a>

```csharp
private void ResetNamePattern()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetPreventUserExistenceErrors` <a name="ResetPreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetPreventUserExistenceErrors"></a>

```csharp
private void ResetPreventUserExistenceErrors()
```

##### `ResetReadAttributes` <a name="ResetReadAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetReadAttributes"></a>

```csharp
private void ResetReadAttributes()
```

##### `ResetRefreshTokenValidity` <a name="ResetRefreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetRefreshTokenValidity"></a>

```csharp
private void ResetRefreshTokenValidity()
```

##### `ResetSupportedIdentityProviders` <a name="ResetSupportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetSupportedIdentityProviders"></a>

```csharp
private void ResetSupportedIdentityProviders()
```

##### `ResetTokenValidityUnits` <a name="ResetTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetTokenValidityUnits"></a>

```csharp
private void ResetTokenValidityUnits()
```

##### `ResetWriteAttributes` <a name="ResetWriteAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.resetWriteAttributes"></a>

```csharp
private void ResetWriteAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoManagedUserPoolClient resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoManagedUserPoolClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoManagedUserPoolClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoManagedUserPoolClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoManagedUserPoolClient.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CognitoManagedUserPoolClient resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoManagedUserPoolClient to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoManagedUserPoolClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CognitoManagedUserPoolClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList">CognitoManagedUserPoolClientAnalyticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList">CognitoManagedUserPoolClientTokenValidityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidityInput">AccessTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsInput">AllowedOauthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClientInput">AllowedOauthFlowsUserPoolClientInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopesInput">AllowedOauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfigurationInput">AnalyticsConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidityInput">AuthSessionValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrlsInput">CallbackUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUriInput">DefaultRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextDataInput">EnablePropagateAdditionalUserContextDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocationInput">EnableTokenRevocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlowsInput">ExplicitAuthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidityInput">IdTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrlsInput">LogoutUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePatternInput">NamePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrorsInput">PreventUserExistenceErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributesInput">ReadAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidityInput">RefreshTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProvidersInput">SupportedIdentityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnitsInput">TokenValidityUnitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributesInput">WriteAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlows">AllowedOauthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClient">AllowedOauthFlowsUserPoolClient</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopes">AllowedOauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidity">AuthSessionValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrls">CallbackUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidity">IdTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrls">LogoutUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePattern">NamePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributes">ReadAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributes">WriteAttributes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AnalyticsConfiguration`<sup>Required</sup> <a name="AnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfiguration"></a>

```csharp
public CognitoManagedUserPoolClientAnalyticsConfigurationList AnalyticsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList">CognitoManagedUserPoolClientAnalyticsConfigurationList</a>

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TokenValidityUnits`<sup>Required</sup> <a name="TokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnits"></a>

```csharp
public CognitoManagedUserPoolClientTokenValidityUnitsList TokenValidityUnits { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList">CognitoManagedUserPoolClientTokenValidityUnitsList</a>

---

##### `AccessTokenValidityInput`<sup>Optional</sup> <a name="AccessTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidityInput"></a>

```csharp
public double AccessTokenValidityInput { get; }
```

- *Type:* double

---

##### `AllowedOauthFlowsInput`<sup>Optional</sup> <a name="AllowedOauthFlowsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsInput"></a>

```csharp
public string[] AllowedOauthFlowsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOauthFlowsUserPoolClientInput`<sup>Optional</sup> <a name="AllowedOauthFlowsUserPoolClientInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClientInput"></a>

```csharp
public object AllowedOauthFlowsUserPoolClientInput { get; }
```

- *Type:* object

---

##### `AllowedOauthScopesInput`<sup>Optional</sup> <a name="AllowedOauthScopesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopesInput"></a>

```csharp
public string[] AllowedOauthScopesInput { get; }
```

- *Type:* string[]

---

##### `AnalyticsConfigurationInput`<sup>Optional</sup> <a name="AnalyticsConfigurationInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.analyticsConfigurationInput"></a>

```csharp
public object AnalyticsConfigurationInput { get; }
```

- *Type:* object

---

##### `AuthSessionValidityInput`<sup>Optional</sup> <a name="AuthSessionValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidityInput"></a>

```csharp
public double AuthSessionValidityInput { get; }
```

- *Type:* double

---

##### `CallbackUrlsInput`<sup>Optional</sup> <a name="CallbackUrlsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrlsInput"></a>

```csharp
public string[] CallbackUrlsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRedirectUriInput`<sup>Optional</sup> <a name="DefaultRedirectUriInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUriInput"></a>

```csharp
public string DefaultRedirectUriInput { get; }
```

- *Type:* string

---

##### `EnablePropagateAdditionalUserContextDataInput`<sup>Optional</sup> <a name="EnablePropagateAdditionalUserContextDataInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextDataInput"></a>

```csharp
public object EnablePropagateAdditionalUserContextDataInput { get; }
```

- *Type:* object

---

##### `EnableTokenRevocationInput`<sup>Optional</sup> <a name="EnableTokenRevocationInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocationInput"></a>

```csharp
public object EnableTokenRevocationInput { get; }
```

- *Type:* object

---

##### `ExplicitAuthFlowsInput`<sup>Optional</sup> <a name="ExplicitAuthFlowsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlowsInput"></a>

```csharp
public string[] ExplicitAuthFlowsInput { get; }
```

- *Type:* string[]

---

##### `IdTokenValidityInput`<sup>Optional</sup> <a name="IdTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidityInput"></a>

```csharp
public double IdTokenValidityInput { get; }
```

- *Type:* double

---

##### `LogoutUrlsInput`<sup>Optional</sup> <a name="LogoutUrlsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrlsInput"></a>

```csharp
public string[] LogoutUrlsInput { get; }
```

- *Type:* string[]

---

##### `NamePatternInput`<sup>Optional</sup> <a name="NamePatternInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePatternInput"></a>

```csharp
public string NamePatternInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `PreventUserExistenceErrorsInput`<sup>Optional</sup> <a name="PreventUserExistenceErrorsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```csharp
public string PreventUserExistenceErrorsInput { get; }
```

- *Type:* string

---

##### `ReadAttributesInput`<sup>Optional</sup> <a name="ReadAttributesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributesInput"></a>

```csharp
public string[] ReadAttributesInput { get; }
```

- *Type:* string[]

---

##### `RefreshTokenValidityInput`<sup>Optional</sup> <a name="RefreshTokenValidityInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidityInput"></a>

```csharp
public double RefreshTokenValidityInput { get; }
```

- *Type:* double

---

##### `SupportedIdentityProvidersInput`<sup>Optional</sup> <a name="SupportedIdentityProvidersInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProvidersInput"></a>

```csharp
public string[] SupportedIdentityProvidersInput { get; }
```

- *Type:* string[]

---

##### `TokenValidityUnitsInput`<sup>Optional</sup> <a name="TokenValidityUnitsInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tokenValidityUnitsInput"></a>

```csharp
public object TokenValidityUnitsInput { get; }
```

- *Type:* object

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `WriteAttributesInput`<sup>Optional</sup> <a name="WriteAttributesInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributesInput"></a>

```csharp
public string[] WriteAttributesInput { get; }
```

- *Type:* string[]

---

##### `AccessTokenValidity`<sup>Required</sup> <a name="AccessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.accessTokenValidity"></a>

```csharp
public double AccessTokenValidity { get; }
```

- *Type:* double

---

##### `AllowedOauthFlows`<sup>Required</sup> <a name="AllowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlows"></a>

```csharp
public string[] AllowedOauthFlows { get; }
```

- *Type:* string[]

---

##### `AllowedOauthFlowsUserPoolClient`<sup>Required</sup> <a name="AllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```csharp
public object AllowedOauthFlowsUserPoolClient { get; }
```

- *Type:* object

---

##### `AllowedOauthScopes`<sup>Required</sup> <a name="AllowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.allowedOauthScopes"></a>

```csharp
public string[] AllowedOauthScopes { get; }
```

- *Type:* string[]

---

##### `AuthSessionValidity`<sup>Required</sup> <a name="AuthSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.authSessionValidity"></a>

```csharp
public double AuthSessionValidity { get; }
```

- *Type:* double

---

##### `CallbackUrls`<sup>Required</sup> <a name="CallbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.callbackUrls"></a>

```csharp
public string[] CallbackUrls { get; }
```

- *Type:* string[]

---

##### `DefaultRedirectUri`<sup>Required</sup> <a name="DefaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.defaultRedirectUri"></a>

```csharp
public string DefaultRedirectUri { get; }
```

- *Type:* string

---

##### `EnablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```csharp
public object EnablePropagateAdditionalUserContextData { get; }
```

- *Type:* object

---

##### `EnableTokenRevocation`<sup>Required</sup> <a name="EnableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.enableTokenRevocation"></a>

```csharp
public object EnableTokenRevocation { get; }
```

- *Type:* object

---

##### `ExplicitAuthFlows`<sup>Required</sup> <a name="ExplicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.explicitAuthFlows"></a>

```csharp
public string[] ExplicitAuthFlows { get; }
```

- *Type:* string[]

---

##### `IdTokenValidity`<sup>Required</sup> <a name="IdTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.idTokenValidity"></a>

```csharp
public double IdTokenValidity { get; }
```

- *Type:* double

---

##### `LogoutUrls`<sup>Required</sup> <a name="LogoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.logoutUrls"></a>

```csharp
public string[] LogoutUrls { get; }
```

- *Type:* string[]

---

##### `NamePattern`<sup>Required</sup> <a name="NamePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePattern"></a>

```csharp
public string NamePattern { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `PreventUserExistenceErrors`<sup>Required</sup> <a name="PreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.preventUserExistenceErrors"></a>

```csharp
public string PreventUserExistenceErrors { get; }
```

- *Type:* string

---

##### `ReadAttributes`<sup>Required</sup> <a name="ReadAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.readAttributes"></a>

```csharp
public string[] ReadAttributes { get; }
```

- *Type:* string[]

---

##### `RefreshTokenValidity`<sup>Required</sup> <a name="RefreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.refreshTokenValidity"></a>

```csharp
public double RefreshTokenValidity { get; }
```

- *Type:* double

---

##### `SupportedIdentityProviders`<sup>Required</sup> <a name="SupportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.supportedIdentityProviders"></a>

```csharp
public string[] SupportedIdentityProviders { get; }
```

- *Type:* string[]

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `WriteAttributes`<sup>Required</sup> <a name="WriteAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.writeAttributes"></a>

```csharp
public string[] WriteAttributes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoManagedUserPoolClientAnalyticsConfiguration <a name="CognitoManagedUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedUserPoolClientAnalyticsConfiguration {
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
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.userDataShared">UserDataShared</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}. |

---

##### `ApplicationArn`<sup>Optional</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}.

---

##### `UserDataShared`<sup>Optional</sup> <a name="UserDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```csharp
public object UserDataShared { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}.

---

### CognitoManagedUserPoolClientConfig <a name="CognitoManagedUserPoolClientConfig" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedUserPoolClientConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
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
    double IdTokenValidity = null,
    string[] LogoutUrls = null,
    string NamePattern = null,
    string NamePrefix = null,
    string PreventUserExistenceErrors = null,
    string[] ReadAttributes = null,
    double RefreshTokenValidity = null,
    string[] SupportedIdentityProviders = null,
    object TokenValidityUnits = null,
    string[] WriteAttributes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.accessTokenValidity">AccessTokenValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlows">AllowedOauthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient">AllowedOauthFlowsUserPoolClient</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthScopes">AllowedOauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.analyticsConfiguration">AnalyticsConfiguration</a></code> | <code>object</code> | analytics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.authSessionValidity">AuthSessionValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.callbackUrls">CallbackUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.defaultRedirectUri">DefaultRedirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enablePropagateAdditionalUserContextData">EnablePropagateAdditionalUserContextData</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enableTokenRevocation">EnableTokenRevocation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.explicitAuthFlows">ExplicitAuthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.idTokenValidity">IdTokenValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.logoutUrls">LogoutUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePattern">NamePattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.preventUserExistenceErrors">PreventUserExistenceErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.readAttributes">ReadAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.refreshTokenValidity">RefreshTokenValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.supportedIdentityProviders">SupportedIdentityProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.tokenValidityUnits">TokenValidityUnits</a></code> | <code>object</code> | token_validity_units block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.writeAttributes">WriteAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}.

---

##### `AccessTokenValidity`<sup>Optional</sup> <a name="AccessTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.accessTokenValidity"></a>

```csharp
public double AccessTokenValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}.

---

##### `AllowedOauthFlows`<sup>Optional</sup> <a name="AllowedOauthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlows"></a>

```csharp
public string[] AllowedOauthFlows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}.

---

##### `AllowedOauthFlowsUserPoolClient`<sup>Optional</sup> <a name="AllowedOauthFlowsUserPoolClient" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient"></a>

```csharp
public object AllowedOauthFlowsUserPoolClient { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `AllowedOauthScopes`<sup>Optional</sup> <a name="AllowedOauthScopes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.allowedOauthScopes"></a>

```csharp
public string[] AllowedOauthScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}.

---

##### `AnalyticsConfiguration`<sup>Optional</sup> <a name="AnalyticsConfiguration" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.analyticsConfiguration"></a>

```csharp
public object AnalyticsConfiguration { get; set; }
```

- *Type:* object

analytics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#analytics_configuration CognitoManagedUserPoolClient#analytics_configuration}

---

##### `AuthSessionValidity`<sup>Optional</sup> <a name="AuthSessionValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.authSessionValidity"></a>

```csharp
public double AuthSessionValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}.

---

##### `CallbackUrls`<sup>Optional</sup> <a name="CallbackUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.callbackUrls"></a>

```csharp
public string[] CallbackUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}.

---

##### `DefaultRedirectUri`<sup>Optional</sup> <a name="DefaultRedirectUri" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.defaultRedirectUri"></a>

```csharp
public string DefaultRedirectUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}.

---

##### `EnablePropagateAdditionalUserContextData`<sup>Optional</sup> <a name="EnablePropagateAdditionalUserContextData" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enablePropagateAdditionalUserContextData"></a>

```csharp
public object EnablePropagateAdditionalUserContextData { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}.

---

##### `EnableTokenRevocation`<sup>Optional</sup> <a name="EnableTokenRevocation" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.enableTokenRevocation"></a>

```csharp
public object EnableTokenRevocation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}.

---

##### `ExplicitAuthFlows`<sup>Optional</sup> <a name="ExplicitAuthFlows" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.explicitAuthFlows"></a>

```csharp
public string[] ExplicitAuthFlows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}.

---

##### `IdTokenValidity`<sup>Optional</sup> <a name="IdTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.idTokenValidity"></a>

```csharp
public double IdTokenValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}.

---

##### `LogoutUrls`<sup>Optional</sup> <a name="LogoutUrls" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.logoutUrls"></a>

```csharp
public string[] LogoutUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}.

---

##### `NamePattern`<sup>Optional</sup> <a name="NamePattern" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePattern"></a>

```csharp
public string NamePattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}.

---

##### `PreventUserExistenceErrors`<sup>Optional</sup> <a name="PreventUserExistenceErrors" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```csharp
public string PreventUserExistenceErrors { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}.

---

##### `ReadAttributes`<sup>Optional</sup> <a name="ReadAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.readAttributes"></a>

```csharp
public string[] ReadAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}.

---

##### `RefreshTokenValidity`<sup>Optional</sup> <a name="RefreshTokenValidity" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.refreshTokenValidity"></a>

```csharp
public double RefreshTokenValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}.

---

##### `SupportedIdentityProviders`<sup>Optional</sup> <a name="SupportedIdentityProviders" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.supportedIdentityProviders"></a>

```csharp
public string[] SupportedIdentityProviders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}.

---

##### `TokenValidityUnits`<sup>Optional</sup> <a name="TokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.tokenValidityUnits"></a>

```csharp
public object TokenValidityUnits { get; set; }
```

- *Type:* object

token_validity_units block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#token_validity_units CognitoManagedUserPoolClient#token_validity_units}

---

##### `WriteAttributes`<sup>Optional</sup> <a name="WriteAttributes" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientConfig.property.writeAttributes"></a>

```csharp
public string[] WriteAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}.

---

### CognitoManagedUserPoolClientTokenValidityUnits <a name="CognitoManagedUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedUserPoolClientTokenValidityUnits {
    string AccessToken = null,
    string IdToken = null,
    string RefreshToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.idToken">IdToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.refreshToken">RefreshToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}.

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.idToken"></a>

```csharp
public string IdToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}.

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```csharp
public string RefreshToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoManagedUserPoolClientAnalyticsConfigurationList <a name="CognitoManagedUserPoolClientAnalyticsConfigurationList" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedUserPoolClientAnalyticsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get"></a>

```csharp
private CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationArn` <a name="ResetApplicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```csharp
private void ResetApplicationArn()
```

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetUserDataShared` <a name="ResetUserDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```csharp
private void ResetUserDataShared()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">ApplicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">UserDataSharedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">UserDataShared</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```csharp
public string ApplicationArnInput { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `UserDataSharedInput`<sup>Optional</sup> <a name="UserDataSharedInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```csharp
public object UserDataSharedInput { get; }
```

- *Type:* object

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `UserDataShared`<sup>Required</sup> <a name="UserDataShared" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```csharp
public object UserDataShared { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoManagedUserPoolClientTokenValidityUnitsList <a name="CognitoManagedUserPoolClientTokenValidityUnitsList" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedUserPoolClientTokenValidityUnitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get"></a>

```csharp
private CognitoManagedUserPoolClientTokenValidityUnitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoManagedUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoManagedUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedUserPoolClientTokenValidityUnitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```csharp
private void ResetIdToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```csharp
private void ResetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idToken">IdToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```csharp
public string IdTokenInput { get; }
```

- *Type:* string

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```csharp
public string RefreshTokenInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```csharp
public string IdToken { get; }
```

- *Type:* string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```csharp
public string RefreshToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoManagedUserPoolClient.CognitoManagedUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



