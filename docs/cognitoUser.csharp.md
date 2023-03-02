# `cognitoUser` Submodule <a name="`cognitoUser` Submodule" id="@cdktf/provider-aws.cognitoUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUser <a name="CognitoUser" id="@cdktf/provider-aws.cognitoUser.CognitoUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user aws_cognito_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUser(Construct Scope, string Id, CognitoUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig">CognitoUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig">CognitoUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetClientMetadata">ResetClientMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetDesiredDeliveryMediums">ResetDesiredDeliveryMediums</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetForceAliasCreation">ResetForceAliasCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetMessageAction">ResetMessageAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetTemporaryPassword">ResetTemporaryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetValidationData">ResetValidationData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetClientMetadata` <a name="ResetClientMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetClientMetadata"></a>

```csharp
private void ResetClientMetadata()
```

##### `ResetDesiredDeliveryMediums` <a name="ResetDesiredDeliveryMediums" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetDesiredDeliveryMediums"></a>

```csharp
private void ResetDesiredDeliveryMediums()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetForceAliasCreation` <a name="ResetForceAliasCreation" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetForceAliasCreation"></a>

```csharp
private void ResetForceAliasCreation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMessageAction` <a name="ResetMessageAction" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetMessageAction"></a>

```csharp
private void ResetMessageAction()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetTemporaryPassword` <a name="ResetTemporaryPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetTemporaryPassword"></a>

```csharp
private void ResetTemporaryPassword()
```

##### `ResetValidationData` <a name="ResetValidationData" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetValidationData"></a>

```csharp
private void ResetValidationData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.lastModifiedDate">LastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.mfaSettingList">MfaSettingList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.preferredMfaSetting">PreferredMfaSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.sub">Sub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadataInput">ClientMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediumsInput">DesiredDeliveryMediumsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreationInput">ForceAliasCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageActionInput">MessageActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPasswordInput">TemporaryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationDataInput">ValidationDataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadata">ClientMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediums">DesiredDeliveryMediums</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreation">ForceAliasCreation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageAction">MessageAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPassword">TemporaryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationData">ValidationData</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.lastModifiedDate"></a>

```csharp
public string LastModifiedDate { get; }
```

- *Type:* string

---

##### `MfaSettingList`<sup>Required</sup> <a name="MfaSettingList" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.mfaSettingList"></a>

```csharp
public string[] MfaSettingList { get; }
```

- *Type:* string[]

---

##### `PreferredMfaSetting`<sup>Required</sup> <a name="PreferredMfaSetting" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.preferredMfaSetting"></a>

```csharp
public string PreferredMfaSetting { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Sub`<sup>Required</sup> <a name="Sub" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.sub"></a>

```csharp
public string Sub { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientMetadataInput`<sup>Optional</sup> <a name="ClientMetadataInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClientMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DesiredDeliveryMediumsInput`<sup>Optional</sup> <a name="DesiredDeliveryMediumsInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediumsInput"></a>

```csharp
public string[] DesiredDeliveryMediumsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ForceAliasCreationInput`<sup>Optional</sup> <a name="ForceAliasCreationInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreationInput"></a>

```csharp
public object ForceAliasCreationInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MessageActionInput`<sup>Optional</sup> <a name="MessageActionInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageActionInput"></a>

```csharp
public string MessageActionInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `TemporaryPasswordInput`<sup>Optional</sup> <a name="TemporaryPasswordInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPasswordInput"></a>

```csharp
public string TemporaryPasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `ValidationDataInput`<sup>Optional</sup> <a name="ValidationDataInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationDataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValidationDataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientMetadata`<sup>Required</sup> <a name="ClientMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClientMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DesiredDeliveryMediums`<sup>Required</sup> <a name="DesiredDeliveryMediums" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediums"></a>

```csharp
public string[] DesiredDeliveryMediums { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `ForceAliasCreation`<sup>Required</sup> <a name="ForceAliasCreation" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreation"></a>

```csharp
public object ForceAliasCreation { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MessageAction`<sup>Required</sup> <a name="MessageAction" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageAction"></a>

```csharp
public string MessageAction { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `TemporaryPassword`<sup>Required</sup> <a name="TemporaryPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPassword"></a>

```csharp
public string TemporaryPassword { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `ValidationData`<sup>Required</sup> <a name="ValidationData" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationData"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValidationData { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserConfig <a name="CognitoUserConfig" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Username,
    string UserPoolId,
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    System.Collections.Generic.IDictionary<string, string> ClientMetadata = null,
    string[] DesiredDeliveryMediums = null,
    object Enabled = null,
    object ForceAliasCreation = null,
    string Id = null,
    string MessageAction = null,
    string Password = null,
    string TemporaryPassword = null,
    System.Collections.Generic.IDictionary<string, string> ValidationData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.clientMetadata">ClientMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.desiredDeliveryMediums">DesiredDeliveryMediums</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forceAliasCreation">ForceAliasCreation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.messageAction">MessageAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.temporaryPassword">TemporaryPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.validationData">ValidationData</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}.

---

##### `ClientMetadata`<sup>Optional</sup> <a name="ClientMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.clientMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClientMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}.

---

##### `DesiredDeliveryMediums`<sup>Optional</sup> <a name="DesiredDeliveryMediums" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.desiredDeliveryMediums"></a>

```csharp
public string[] DesiredDeliveryMediums { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}.

---

##### `ForceAliasCreation`<sup>Optional</sup> <a name="ForceAliasCreation" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forceAliasCreation"></a>

```csharp
public object ForceAliasCreation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MessageAction`<sup>Optional</sup> <a name="MessageAction" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.messageAction"></a>

```csharp
public string MessageAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}.

---

##### `TemporaryPassword`<sup>Optional</sup> <a name="TemporaryPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.temporaryPassword"></a>

```csharp
public string TemporaryPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}.

---

##### `ValidationData`<sup>Optional</sup> <a name="ValidationData" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.validationData"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValidationData { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}.

---



