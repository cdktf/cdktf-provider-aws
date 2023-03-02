# `cognitoRiskConfiguration` Submodule <a name="`cognitoRiskConfiguration` Submodule" id="@cdktf/provider-aws.cognitoRiskConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoRiskConfiguration <a name="CognitoRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration aws_cognito_risk_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfiguration(Construct Scope, string Id, CognitoRiskConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig">CognitoRiskConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig">CognitoRiskConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putAccountTakeoverRiskConfiguration">PutAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putCompromisedCredentialsRiskConfiguration">PutCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putRiskExceptionConfiguration">PutRiskExceptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetAccountTakeoverRiskConfiguration">ResetAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetCompromisedCredentialsRiskConfiguration">ResetCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetRiskExceptionConfiguration">ResetRiskExceptionConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAccountTakeoverRiskConfiguration` <a name="PutAccountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putAccountTakeoverRiskConfiguration"></a>

```csharp
private void PutAccountTakeoverRiskConfiguration(CognitoRiskConfigurationAccountTakeoverRiskConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putAccountTakeoverRiskConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

---

##### `PutCompromisedCredentialsRiskConfiguration` <a name="PutCompromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putCompromisedCredentialsRiskConfiguration"></a>

```csharp
private void PutCompromisedCredentialsRiskConfiguration(CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putCompromisedCredentialsRiskConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

---

##### `PutRiskExceptionConfiguration` <a name="PutRiskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putRiskExceptionConfiguration"></a>

```csharp
private void PutRiskExceptionConfiguration(CognitoRiskConfigurationRiskExceptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.putRiskExceptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

---

##### `ResetAccountTakeoverRiskConfiguration` <a name="ResetAccountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetAccountTakeoverRiskConfiguration"></a>

```csharp
private void ResetAccountTakeoverRiskConfiguration()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetCompromisedCredentialsRiskConfiguration` <a name="ResetCompromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetCompromisedCredentialsRiskConfiguration"></a>

```csharp
private void ResetCompromisedCredentialsRiskConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRiskExceptionConfiguration` <a name="ResetRiskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.resetRiskExceptionConfiguration"></a>

```csharp
private void ResetRiskExceptionConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoRiskConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoRiskConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoRiskConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfiguration">AccountTakeoverRiskConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfiguration">CompromisedCredentialsRiskConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfiguration">RiskExceptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference">CognitoRiskConfigurationRiskExceptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfigurationInput">AccountTakeoverRiskConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfigurationInput">CompromisedCredentialsRiskConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfigurationInput">RiskExceptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountTakeoverRiskConfiguration`<sup>Required</sup> <a name="AccountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfiguration"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference AccountTakeoverRiskConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference</a>

---

##### `CompromisedCredentialsRiskConfiguration`<sup>Required</sup> <a name="CompromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfiguration"></a>

```csharp
public CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference CompromisedCredentialsRiskConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference</a>

---

##### `RiskExceptionConfiguration`<sup>Required</sup> <a name="RiskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfiguration"></a>

```csharp
public CognitoRiskConfigurationRiskExceptionConfigurationOutputReference RiskExceptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference">CognitoRiskConfigurationRiskExceptionConfigurationOutputReference</a>

---

##### `AccountTakeoverRiskConfigurationInput`<sup>Optional</sup> <a name="AccountTakeoverRiskConfigurationInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.accountTakeoverRiskConfigurationInput"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfiguration AccountTakeoverRiskConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `CompromisedCredentialsRiskConfigurationInput`<sup>Optional</sup> <a name="CompromisedCredentialsRiskConfigurationInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.compromisedCredentialsRiskConfigurationInput"></a>

```csharp
public CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration CompromisedCredentialsRiskConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RiskExceptionConfigurationInput`<sup>Optional</sup> <a name="RiskExceptionConfigurationInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.riskExceptionConfigurationInput"></a>

```csharp
public CognitoRiskConfigurationRiskExceptionConfiguration RiskExceptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoRiskConfigurationAccountTakeoverRiskConfiguration <a name="CognitoRiskConfigurationAccountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfiguration {
    CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions Actions,
    CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration NotifyConfiguration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.notifyConfiguration">NotifyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | notify_configuration block. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.actions"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions Actions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}

---

##### `NotifyConfiguration`<sup>Required</sup> <a name="NotifyConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration.property.notifyConfiguration"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration NotifyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

notify_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify_configuration CognitoRiskConfiguration#notify_configuration}

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions {
    CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction HighAction = null,
    CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction LowAction = null,
    CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction MediumAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.highAction">HighAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a></code> | high_action block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.lowAction">LowAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a></code> | low_action block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.mediumAction">MediumAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | medium_action block. |

---

##### `HighAction`<sup>Optional</sup> <a name="HighAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.highAction"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction HighAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

high_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#high_action CognitoRiskConfiguration#high_action}

---

##### `LowAction`<sup>Optional</sup> <a name="LowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.lowAction"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction LowAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

low_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#low_action CognitoRiskConfiguration#low_action}

---

##### `MediumAction`<sup>Optional</sup> <a name="MediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions.property.mediumAction"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction MediumAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

medium_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#medium_action CognitoRiskConfiguration#medium_action}

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction {
    string EventAction,
    object Notify
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.eventAction">EventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.notify">Notify</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}. |

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.eventAction"></a>

```csharp
public string EventAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction.property.notify"></a>

```csharp
public object Notify { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction {
    string EventAction,
    object Notify
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.eventAction">EventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.notify">Notify</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}. |

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.eventAction"></a>

```csharp
public string EventAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction.property.notify"></a>

```csharp
public object Notify { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction {
    string EventAction,
    object Notify
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.eventAction">EventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.notify">Notify</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}. |

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.eventAction"></a>

```csharp
public string EventAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction.property.notify"></a>

```csharp
public object Notify { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration {
    string SourceArn,
    CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail BlockEmail = null,
    string From = null,
    CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail MfaEmail = null,
    CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail NoActionEmail = null,
    string ReplyTo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.sourceArn">SourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#source_arn CognitoRiskConfiguration#source_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.blockEmail">BlockEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | block_email block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#from CognitoRiskConfiguration#from}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.mfaEmail">MfaEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | mfa_email block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.noActionEmail">NoActionEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | no_action_email block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.replyTo">ReplyTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#reply_to CognitoRiskConfiguration#reply_to}. |

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.sourceArn"></a>

```csharp
public string SourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#source_arn CognitoRiskConfiguration#source_arn}.

---

##### `BlockEmail`<sup>Optional</sup> <a name="BlockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.blockEmail"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail BlockEmail { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

block_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#block_email CognitoRiskConfiguration#block_email}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#from CognitoRiskConfiguration#from}.

---

##### `MfaEmail`<sup>Optional</sup> <a name="MfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.mfaEmail"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail MfaEmail { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

mfa_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#mfa_email CognitoRiskConfiguration#mfa_email}

---

##### `NoActionEmail`<sup>Optional</sup> <a name="NoActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.noActionEmail"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail NoActionEmail { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

no_action_email block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#no_action_email CognitoRiskConfiguration#no_action_email}

---

##### `ReplyTo`<sup>Optional</sup> <a name="ReplyTo" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration.property.replyTo"></a>

```csharp
public string ReplyTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#reply_to CognitoRiskConfiguration#reply_to}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail {
    string HtmlBody,
    string Subject,
    string TextBody
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.htmlBody">HtmlBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.textBody">TextBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}. |

---

##### `HtmlBody`<sup>Required</sup> <a name="HtmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.htmlBody"></a>

```csharp
public string HtmlBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

##### `TextBody`<sup>Required</sup> <a name="TextBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.property.textBody"></a>

```csharp
public string TextBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail {
    string HtmlBody,
    string Subject,
    string TextBody
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.htmlBody">HtmlBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.textBody">TextBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}. |

---

##### `HtmlBody`<sup>Required</sup> <a name="HtmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.htmlBody"></a>

```csharp
public string HtmlBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

##### `TextBody`<sup>Required</sup> <a name="TextBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.property.textBody"></a>

```csharp
public string TextBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail {
    string HtmlBody,
    string Subject,
    string TextBody
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.htmlBody">HtmlBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.textBody">TextBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}. |

---

##### `HtmlBody`<sup>Required</sup> <a name="HtmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.htmlBody"></a>

```csharp
public string HtmlBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}.

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}.

---

##### `TextBody`<sup>Required</sup> <a name="TextBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.property.textBody"></a>

```csharp
public string TextBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}.

---

### CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration {
    CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions Actions,
    string[] EventFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.eventFilter">EventFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_filter CognitoRiskConfiguration#event_filter}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.actions"></a>

```csharp
public CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions Actions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}

---

##### `EventFilter`<sup>Optional</sup> <a name="EventFilter" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration.property.eventFilter"></a>

```csharp
public string[] EventFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_filter CognitoRiskConfiguration#event_filter}.

---

### CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions {
    string EventAction
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions.property.eventAction">EventAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}. |

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions.property.eventAction"></a>

```csharp
public string EventAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}.

---

### CognitoRiskConfigurationConfig <a name="CognitoRiskConfigurationConfig" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UserPoolId,
    CognitoRiskConfigurationAccountTakeoverRiskConfiguration AccountTakeoverRiskConfiguration = null,
    string ClientId = null,
    CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration CompromisedCredentialsRiskConfiguration = null,
    string Id = null,
    CognitoRiskConfigurationRiskExceptionConfiguration RiskExceptionConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.accountTakeoverRiskConfiguration">AccountTakeoverRiskConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | account_takeover_risk_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.compromisedCredentialsRiskConfiguration">CompromisedCredentialsRiskConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | compromised_credentials_risk_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.riskExceptionConfiguration">RiskExceptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | risk_exception_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}.

---

##### `AccountTakeoverRiskConfiguration`<sup>Optional</sup> <a name="AccountTakeoverRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.accountTakeoverRiskConfiguration"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfiguration AccountTakeoverRiskConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

account_takeover_risk_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#account_takeover_risk_configuration CognitoRiskConfiguration#account_takeover_risk_configuration}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}.

---

##### `CompromisedCredentialsRiskConfiguration`<sup>Optional</sup> <a name="CompromisedCredentialsRiskConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.compromisedCredentialsRiskConfiguration"></a>

```csharp
public CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration CompromisedCredentialsRiskConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

compromised_credentials_risk_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#compromised_credentials_risk_configuration CognitoRiskConfiguration#compromised_credentials_risk_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#id CognitoRiskConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RiskExceptionConfiguration`<sup>Optional</sup> <a name="RiskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationConfig.property.riskExceptionConfiguration"></a>

```csharp
public CognitoRiskConfigurationRiskExceptionConfiguration RiskExceptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

risk_exception_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#risk_exception_configuration CognitoRiskConfiguration#risk_exception_configuration}

---

### CognitoRiskConfigurationRiskExceptionConfiguration <a name="CognitoRiskConfigurationRiskExceptionConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationRiskExceptionConfiguration {
    string[] BlockedIpRangeList = null,
    string[] SkippedIpRangeList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.blockedIpRangeList">BlockedIpRangeList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#blocked_ip_range_list CognitoRiskConfiguration#blocked_ip_range_list}. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.skippedIpRangeList">SkippedIpRangeList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#skipped_ip_range_list CognitoRiskConfiguration#skipped_ip_range_list}. |

---

##### `BlockedIpRangeList`<sup>Optional</sup> <a name="BlockedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.blockedIpRangeList"></a>

```csharp
public string[] BlockedIpRangeList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#blocked_ip_range_list CognitoRiskConfiguration#blocked_ip_range_list}.

---

##### `SkippedIpRangeList`<sup>Optional</sup> <a name="SkippedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration.property.skippedIpRangeList"></a>

```csharp
public string[] SkippedIpRangeList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_risk_configuration#skipped_ip_range_list CognitoRiskConfiguration#skipped_ip_range_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notifyInput">NotifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction">EventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify">Notify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventActionInput"></a>

```csharp
public string EventActionInput { get; }
```

- *Type:* string

---

##### `NotifyInput`<sup>Optional</sup> <a name="NotifyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notifyInput"></a>

```csharp
public object NotifyInput { get; }
```

- *Type:* object

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction"></a>

```csharp
public string EventAction { get; }
```

- *Type:* string

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify"></a>

```csharp
public object Notify { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notifyInput">NotifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction">EventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify">Notify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventActionInput"></a>

```csharp
public string EventActionInput { get; }
```

- *Type:* string

---

##### `NotifyInput`<sup>Optional</sup> <a name="NotifyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notifyInput"></a>

```csharp
public object NotifyInput { get; }
```

- *Type:* object

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction"></a>

```csharp
public string EventAction { get; }
```

- *Type:* string

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify"></a>

```csharp
public object Notify { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notifyInput">NotifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction">EventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify">Notify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventActionInput"></a>

```csharp
public string EventActionInput { get; }
```

- *Type:* string

---

##### `NotifyInput`<sup>Optional</sup> <a name="NotifyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notifyInput"></a>

```csharp
public object NotifyInput { get; }
```

- *Type:* object

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction"></a>

```csharp
public string EventAction { get; }
```

- *Type:* string

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify"></a>

```csharp
public object Notify { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction">PutHighAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction">PutLowAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction">PutMediumAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetHighAction">ResetHighAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetLowAction">ResetLowAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetMediumAction">ResetMediumAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHighAction` <a name="PutHighAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction"></a>

```csharp
private void PutHighAction(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putHighAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

---

##### `PutLowAction` <a name="PutLowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction"></a>

```csharp
private void PutLowAction(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putLowAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

---

##### `PutMediumAction` <a name="PutMediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction"></a>

```csharp
private void PutMediumAction(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.putMediumAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

---

##### `ResetHighAction` <a name="ResetHighAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetHighAction"></a>

```csharp
private void ResetHighAction()
```

##### `ResetLowAction` <a name="ResetLowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetLowAction"></a>

```csharp
private void ResetLowAction()
```

##### `ResetMediumAction` <a name="ResetMediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.resetMediumAction"></a>

```csharp
private void ResetMediumAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction">HighAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction">LowAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction">MediumAction</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highActionInput">HighActionInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowActionInput">LowActionInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumActionInput">MediumActionInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HighAction`<sup>Required</sup> <a name="HighAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference HighAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a>

---

##### `LowAction`<sup>Required</sup> <a name="LowAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference LowAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a>

---

##### `MediumAction`<sup>Required</sup> <a name="MediumAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference MediumAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a>

---

##### `HighActionInput`<sup>Optional</sup> <a name="HighActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.highActionInput"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction HighActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction</a>

---

##### `LowActionInput`<sup>Optional</sup> <a name="LowActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.lowActionInput"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction LowActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction</a>

---

##### `MediumActionInput`<sup>Optional</sup> <a name="MediumActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumActionInput"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction MediumActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBodyInput">HtmlBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBodyInput">TextBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody">HtmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody">TextBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HtmlBodyInput`<sup>Optional</sup> <a name="HtmlBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBodyInput"></a>

```csharp
public string HtmlBodyInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `TextBodyInput`<sup>Optional</sup> <a name="TextBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBodyInput"></a>

```csharp
public string TextBodyInput { get; }
```

- *Type:* string

---

##### `HtmlBody`<sup>Required</sup> <a name="HtmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody"></a>

```csharp
public string HtmlBody { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `TextBody`<sup>Required</sup> <a name="TextBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody"></a>

```csharp
public string TextBody { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBodyInput">HtmlBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBodyInput">TextBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody">HtmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody">TextBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HtmlBodyInput`<sup>Optional</sup> <a name="HtmlBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBodyInput"></a>

```csharp
public string HtmlBodyInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `TextBodyInput`<sup>Optional</sup> <a name="TextBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBodyInput"></a>

```csharp
public string TextBodyInput { get; }
```

- *Type:* string

---

##### `HtmlBody`<sup>Required</sup> <a name="HtmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody"></a>

```csharp
public string HtmlBody { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `TextBody`<sup>Required</sup> <a name="TextBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody"></a>

```csharp
public string TextBody { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBodyInput">HtmlBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBodyInput">TextBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody">HtmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody">TextBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HtmlBodyInput`<sup>Optional</sup> <a name="HtmlBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBodyInput"></a>

```csharp
public string HtmlBodyInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `TextBodyInput`<sup>Optional</sup> <a name="TextBodyInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBodyInput"></a>

```csharp
public string TextBodyInput { get; }
```

- *Type:* string

---

##### `HtmlBody`<sup>Required</sup> <a name="HtmlBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody"></a>

```csharp
public string HtmlBody { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `TextBody`<sup>Required</sup> <a name="TextBody" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody"></a>

```csharp
public string TextBody { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail">PutBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail">PutMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail">PutNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetBlockEmail">ResetBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetMfaEmail">ResetMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetNoActionEmail">ResetNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetReplyTo">ResetReplyTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockEmail` <a name="PutBlockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail"></a>

```csharp
private void PutBlockEmail(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putBlockEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---

##### `PutMfaEmail` <a name="PutMfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail"></a>

```csharp
private void PutMfaEmail(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putMfaEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---

##### `PutNoActionEmail` <a name="PutNoActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail"></a>

```csharp
private void PutNoActionEmail(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.putNoActionEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---

##### `ResetBlockEmail` <a name="ResetBlockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetBlockEmail"></a>

```csharp
private void ResetBlockEmail()
```

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetMfaEmail` <a name="ResetMfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetMfaEmail"></a>

```csharp
private void ResetMfaEmail()
```

##### `ResetNoActionEmail` <a name="ResetNoActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetNoActionEmail"></a>

```csharp
private void ResetNoActionEmail()
```

##### `ResetReplyTo` <a name="ResetReplyTo" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resetReplyTo"></a>

```csharp
private void ResetReplyTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail">BlockEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail">MfaEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail">NoActionEmail</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmailInput">BlockEmailInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmailInput">MfaEmailInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmailInput">NoActionEmailInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyToInput">ReplyToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArnInput">SourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo">ReplyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockEmail`<sup>Required</sup> <a name="BlockEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference BlockEmail { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a>

---

##### `MfaEmail`<sup>Required</sup> <a name="MfaEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference MfaEmail { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a>

---

##### `NoActionEmail`<sup>Required</sup> <a name="NoActionEmail" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference NoActionEmail { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a>

---

##### `BlockEmailInput`<sup>Optional</sup> <a name="BlockEmailInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmailInput"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail BlockEmailInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `MfaEmailInput`<sup>Optional</sup> <a name="MfaEmailInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmailInput"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail MfaEmailInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---

##### `NoActionEmailInput`<sup>Optional</sup> <a name="NoActionEmailInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmailInput"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail NoActionEmailInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---

##### `ReplyToInput`<sup>Optional</sup> <a name="ReplyToInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyToInput"></a>

```csharp
public string ReplyToInput { get; }
```

- *Type:* string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArnInput"></a>

```csharp
public string SourceArnInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `ReplyTo`<sup>Required</sup> <a name="ReplyTo" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo"></a>

```csharp
public string ReplyTo { get; }
```

- *Type:* string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---


### CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference <a name="CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration">PutNotifyConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions"></a>

```csharp
private void PutActions(CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

---

##### `PutNotifyConfiguration` <a name="PutNotifyConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration"></a>

```csharp
private void PutNotifyConfiguration(CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.putNotifyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration">NotifyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfigurationInput">NotifyConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actions"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference</a>

---

##### `NotifyConfiguration`<sup>Required</sup> <a name="NotifyConfiguration" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference NotifyConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.actionsInput"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions ActionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions">CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions</a>

---

##### `NotifyConfigurationInput`<sup>Optional</sup> <a name="NotifyConfigurationInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.notifyConfigurationInput"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration NotifyConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationAccountTakeoverRiskConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationAccountTakeoverRiskConfiguration">CognitoRiskConfigurationAccountTakeoverRiskConfiguration</a>

---


### CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction">EventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventActionInput"></a>

```csharp
public string EventActionInput { get; }
```

- *Type:* string

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction"></a>

```csharp
public string EventAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

---


### CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference <a name="CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resetEventFilter">ResetEventFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.putActions"></a>

```csharp
private void PutActions(CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

---

##### `ResetEventFilter` <a name="ResetEventFilter" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.resetEventFilter"></a>

```csharp
private void ResetEventFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilterInput">EventFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter">EventFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actions"></a>

```csharp
public CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.actionsInput"></a>

```csharp
public CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions ActionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions">CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions</a>

---

##### `EventFilterInput`<sup>Optional</sup> <a name="EventFilterInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilterInput"></a>

```csharp
public string[] EventFilterInput { get; }
```

- *Type:* string[]

---

##### `EventFilter`<sup>Required</sup> <a name="EventFilter" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter"></a>

```csharp
public string[] EventFilter { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration">CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration</a>

---


### CognitoRiskConfigurationRiskExceptionConfigurationOutputReference <a name="CognitoRiskConfigurationRiskExceptionConfigurationOutputReference" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoRiskConfigurationRiskExceptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetBlockedIpRangeList">ResetBlockedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetSkippedIpRangeList">ResetSkippedIpRangeList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockedIpRangeList` <a name="ResetBlockedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetBlockedIpRangeList"></a>

```csharp
private void ResetBlockedIpRangeList()
```

##### `ResetSkippedIpRangeList` <a name="ResetSkippedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.resetSkippedIpRangeList"></a>

```csharp
private void ResetSkippedIpRangeList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeListInput">BlockedIpRangeListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeListInput">SkippedIpRangeListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeList">BlockedIpRangeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeList">SkippedIpRangeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockedIpRangeListInput`<sup>Optional</sup> <a name="BlockedIpRangeListInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeListInput"></a>

```csharp
public string[] BlockedIpRangeListInput { get; }
```

- *Type:* string[]

---

##### `SkippedIpRangeListInput`<sup>Optional</sup> <a name="SkippedIpRangeListInput" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeListInput"></a>

```csharp
public string[] SkippedIpRangeListInput { get; }
```

- *Type:* string[]

---

##### `BlockedIpRangeList`<sup>Required</sup> <a name="BlockedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.blockedIpRangeList"></a>

```csharp
public string[] BlockedIpRangeList { get; }
```

- *Type:* string[]

---

##### `SkippedIpRangeList`<sup>Required</sup> <a name="SkippedIpRangeList" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.skippedIpRangeList"></a>

```csharp
public string[] SkippedIpRangeList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public CognitoRiskConfigurationRiskExceptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoRiskConfiguration.CognitoRiskConfigurationRiskExceptionConfiguration">CognitoRiskConfigurationRiskExceptionConfiguration</a>

---



