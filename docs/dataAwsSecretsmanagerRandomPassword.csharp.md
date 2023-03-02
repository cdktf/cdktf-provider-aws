# `dataAwsSecretsmanagerRandomPassword` Submodule <a name="`dataAwsSecretsmanagerRandomPassword` Submodule" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecretsmanagerRandomPassword <a name="DataAwsSecretsmanagerRandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password aws_secretsmanager_random_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecretsmanagerRandomPassword(Construct Scope, string Id, DataAwsSecretsmanagerRandomPasswordConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig">DataAwsSecretsmanagerRandomPasswordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig">DataAwsSecretsmanagerRandomPasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeCharacters">ResetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeLowercase">ResetExcludeLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeNumbers">ResetExcludeNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludePunctuation">ResetExcludePunctuation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeUppercase">ResetExcludeUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetIncludeSpace">ResetIncludeSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetPasswordLength">ResetPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRandomPassword">ResetRandomPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRequireEachIncludedType">ResetRequireEachIncludedType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExcludeCharacters` <a name="ResetExcludeCharacters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeCharacters"></a>

```csharp
private void ResetExcludeCharacters()
```

##### `ResetExcludeLowercase` <a name="ResetExcludeLowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeLowercase"></a>

```csharp
private void ResetExcludeLowercase()
```

##### `ResetExcludeNumbers` <a name="ResetExcludeNumbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeNumbers"></a>

```csharp
private void ResetExcludeNumbers()
```

##### `ResetExcludePunctuation` <a name="ResetExcludePunctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludePunctuation"></a>

```csharp
private void ResetExcludePunctuation()
```

##### `ResetExcludeUppercase` <a name="ResetExcludeUppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeUppercase"></a>

```csharp
private void ResetExcludeUppercase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeSpace` <a name="ResetIncludeSpace" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetIncludeSpace"></a>

```csharp
private void ResetIncludeSpace()
```

##### `ResetPasswordLength` <a name="ResetPasswordLength" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetPasswordLength"></a>

```csharp
private void ResetPasswordLength()
```

##### `ResetRandomPassword` <a name="ResetRandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRandomPassword"></a>

```csharp
private void ResetRandomPassword()
```

##### `ResetRequireEachIncludedType` <a name="ResetRequireEachIncludedType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRequireEachIncludedType"></a>

```csharp
private void ResetRequireEachIncludedType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSecretsmanagerRandomPassword.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSecretsmanagerRandomPassword.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSecretsmanagerRandomPassword.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharactersInput">ExcludeCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercaseInput">ExcludeLowercaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbersInput">ExcludeNumbersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuationInput">ExcludePunctuationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercaseInput">ExcludeUppercaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpaceInput">IncludeSpaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLengthInput">PasswordLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPasswordInput">RandomPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedTypeInput">RequireEachIncludedTypeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharacters">ExcludeCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercase">ExcludeLowercase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbers">ExcludeNumbers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuation">ExcludePunctuation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercase">ExcludeUppercase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpace">IncludeSpace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLength">PasswordLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPassword">RandomPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedType">RequireEachIncludedType</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExcludeCharactersInput`<sup>Optional</sup> <a name="ExcludeCharactersInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharactersInput"></a>

```csharp
public string ExcludeCharactersInput { get; }
```

- *Type:* string

---

##### `ExcludeLowercaseInput`<sup>Optional</sup> <a name="ExcludeLowercaseInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercaseInput"></a>

```csharp
public object ExcludeLowercaseInput { get; }
```

- *Type:* object

---

##### `ExcludeNumbersInput`<sup>Optional</sup> <a name="ExcludeNumbersInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbersInput"></a>

```csharp
public object ExcludeNumbersInput { get; }
```

- *Type:* object

---

##### `ExcludePunctuationInput`<sup>Optional</sup> <a name="ExcludePunctuationInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuationInput"></a>

```csharp
public object ExcludePunctuationInput { get; }
```

- *Type:* object

---

##### `ExcludeUppercaseInput`<sup>Optional</sup> <a name="ExcludeUppercaseInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercaseInput"></a>

```csharp
public object ExcludeUppercaseInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeSpaceInput`<sup>Optional</sup> <a name="IncludeSpaceInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpaceInput"></a>

```csharp
public object IncludeSpaceInput { get; }
```

- *Type:* object

---

##### `PasswordLengthInput`<sup>Optional</sup> <a name="PasswordLengthInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLengthInput"></a>

```csharp
public double PasswordLengthInput { get; }
```

- *Type:* double

---

##### `RandomPasswordInput`<sup>Optional</sup> <a name="RandomPasswordInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPasswordInput"></a>

```csharp
public string RandomPasswordInput { get; }
```

- *Type:* string

---

##### `RequireEachIncludedTypeInput`<sup>Optional</sup> <a name="RequireEachIncludedTypeInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedTypeInput"></a>

```csharp
public object RequireEachIncludedTypeInput { get; }
```

- *Type:* object

---

##### `ExcludeCharacters`<sup>Required</sup> <a name="ExcludeCharacters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharacters"></a>

```csharp
public string ExcludeCharacters { get; }
```

- *Type:* string

---

##### `ExcludeLowercase`<sup>Required</sup> <a name="ExcludeLowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercase"></a>

```csharp
public object ExcludeLowercase { get; }
```

- *Type:* object

---

##### `ExcludeNumbers`<sup>Required</sup> <a name="ExcludeNumbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbers"></a>

```csharp
public object ExcludeNumbers { get; }
```

- *Type:* object

---

##### `ExcludePunctuation`<sup>Required</sup> <a name="ExcludePunctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuation"></a>

```csharp
public object ExcludePunctuation { get; }
```

- *Type:* object

---

##### `ExcludeUppercase`<sup>Required</sup> <a name="ExcludeUppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercase"></a>

```csharp
public object ExcludeUppercase { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeSpace`<sup>Required</sup> <a name="IncludeSpace" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpace"></a>

```csharp
public object IncludeSpace { get; }
```

- *Type:* object

---

##### `PasswordLength`<sup>Required</sup> <a name="PasswordLength" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLength"></a>

```csharp
public double PasswordLength { get; }
```

- *Type:* double

---

##### `RandomPassword`<sup>Required</sup> <a name="RandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPassword"></a>

```csharp
public string RandomPassword { get; }
```

- *Type:* string

---

##### `RequireEachIncludedType`<sup>Required</sup> <a name="RequireEachIncludedType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedType"></a>

```csharp
public object RequireEachIncludedType { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecretsmanagerRandomPasswordConfig <a name="DataAwsSecretsmanagerRandomPasswordConfig" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecretsmanagerRandomPasswordConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExcludeCharacters = null,
    object ExcludeLowercase = null,
    object ExcludeNumbers = null,
    object ExcludePunctuation = null,
    object ExcludeUppercase = null,
    string Id = null,
    object IncludeSpace = null,
    double PasswordLength = null,
    string RandomPassword = null,
    object RequireEachIncludedType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeCharacters">ExcludeCharacters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeLowercase">ExcludeLowercase</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeNumbers">ExcludeNumbers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludePunctuation">ExcludePunctuation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeUppercase">ExcludeUppercase</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.includeSpace">IncludeSpace</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.passwordLength">PasswordLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.randomPassword">RandomPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.requireEachIncludedType">RequireEachIncludedType</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExcludeCharacters`<sup>Optional</sup> <a name="ExcludeCharacters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeCharacters"></a>

```csharp
public string ExcludeCharacters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}.

---

##### `ExcludeLowercase`<sup>Optional</sup> <a name="ExcludeLowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeLowercase"></a>

```csharp
public object ExcludeLowercase { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}.

---

##### `ExcludeNumbers`<sup>Optional</sup> <a name="ExcludeNumbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeNumbers"></a>

```csharp
public object ExcludeNumbers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}.

---

##### `ExcludePunctuation`<sup>Optional</sup> <a name="ExcludePunctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludePunctuation"></a>

```csharp
public object ExcludePunctuation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}.

---

##### `ExcludeUppercase`<sup>Optional</sup> <a name="ExcludeUppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeUppercase"></a>

```csharp
public object ExcludeUppercase { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeSpace`<sup>Optional</sup> <a name="IncludeSpace" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.includeSpace"></a>

```csharp
public object IncludeSpace { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}.

---

##### `PasswordLength`<sup>Optional</sup> <a name="PasswordLength" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.passwordLength"></a>

```csharp
public double PasswordLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}.

---

##### `RandomPassword`<sup>Optional</sup> <a name="RandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.randomPassword"></a>

```csharp
public string RandomPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}.

---

##### `RequireEachIncludedType`<sup>Optional</sup> <a name="RequireEachIncludedType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.requireEachIncludedType"></a>

```csharp
public object RequireEachIncludedType { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}.

---



