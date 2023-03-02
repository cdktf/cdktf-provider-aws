# `iamAccountPasswordPolicy` Submodule <a name="`iamAccountPasswordPolicy` Submodule" id="@cdktf/provider-aws.iamAccountPasswordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamAccountPasswordPolicy <a name="IamAccountPasswordPolicy" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy aws_iam_account_password_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IamAccountPasswordPolicy(Construct Scope, string Id, IamAccountPasswordPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig">IamAccountPasswordPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig">IamAccountPasswordPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetAllowUsersToChangePassword">ResetAllowUsersToChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetHardExpiry">ResetHardExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMaxPasswordAge">ResetMaxPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMinimumPasswordLength">ResetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetPasswordReusePrevention">ResetPasswordReusePrevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireLowercaseCharacters">ResetRequireLowercaseCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireNumbers">ResetRequireNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireSymbols">ResetRequireSymbols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireUppercaseCharacters">ResetRequireUppercaseCharacters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowUsersToChangePassword` <a name="ResetAllowUsersToChangePassword" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetAllowUsersToChangePassword"></a>

```csharp
private void ResetAllowUsersToChangePassword()
```

##### `ResetHardExpiry` <a name="ResetHardExpiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetHardExpiry"></a>

```csharp
private void ResetHardExpiry()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxPasswordAge` <a name="ResetMaxPasswordAge" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMaxPasswordAge"></a>

```csharp
private void ResetMaxPasswordAge()
```

##### `ResetMinimumPasswordLength` <a name="ResetMinimumPasswordLength" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMinimumPasswordLength"></a>

```csharp
private void ResetMinimumPasswordLength()
```

##### `ResetPasswordReusePrevention` <a name="ResetPasswordReusePrevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetPasswordReusePrevention"></a>

```csharp
private void ResetPasswordReusePrevention()
```

##### `ResetRequireLowercaseCharacters` <a name="ResetRequireLowercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireLowercaseCharacters"></a>

```csharp
private void ResetRequireLowercaseCharacters()
```

##### `ResetRequireNumbers` <a name="ResetRequireNumbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireNumbers"></a>

```csharp
private void ResetRequireNumbers()
```

##### `ResetRequireSymbols` <a name="ResetRequireSymbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireSymbols"></a>

```csharp
private void ResetRequireSymbols()
```

##### `ResetRequireUppercaseCharacters` <a name="ResetRequireUppercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireUppercaseCharacters"></a>

```csharp
private void ResetRequireUppercaseCharacters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamAccountPasswordPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamAccountPasswordPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamAccountPasswordPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.expirePasswords">ExpirePasswords</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePasswordInput">AllowUsersToChangePasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiryInput">HardExpiryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAgeInput">MaxPasswordAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLengthInput">MinimumPasswordLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePreventionInput">PasswordReusePreventionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharactersInput">RequireLowercaseCharactersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbersInput">RequireNumbersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbolsInput">RequireSymbolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharactersInput">RequireUppercaseCharactersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePassword">AllowUsersToChangePassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiry">HardExpiry</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAge">MaxPasswordAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePrevention">PasswordReusePrevention</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharacters">RequireLowercaseCharacters</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbers">RequireNumbers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbols">RequireSymbols</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharacters">RequireUppercaseCharacters</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExpirePasswords`<sup>Required</sup> <a name="ExpirePasswords" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.expirePasswords"></a>

```csharp
public IResolvable ExpirePasswords { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AllowUsersToChangePasswordInput`<sup>Optional</sup> <a name="AllowUsersToChangePasswordInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePasswordInput"></a>

```csharp
public object AllowUsersToChangePasswordInput { get; }
```

- *Type:* object

---

##### `HardExpiryInput`<sup>Optional</sup> <a name="HardExpiryInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiryInput"></a>

```csharp
public object HardExpiryInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxPasswordAgeInput`<sup>Optional</sup> <a name="MaxPasswordAgeInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAgeInput"></a>

```csharp
public double MaxPasswordAgeInput { get; }
```

- *Type:* double

---

##### `MinimumPasswordLengthInput`<sup>Optional</sup> <a name="MinimumPasswordLengthInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLengthInput"></a>

```csharp
public double MinimumPasswordLengthInput { get; }
```

- *Type:* double

---

##### `PasswordReusePreventionInput`<sup>Optional</sup> <a name="PasswordReusePreventionInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePreventionInput"></a>

```csharp
public double PasswordReusePreventionInput { get; }
```

- *Type:* double

---

##### `RequireLowercaseCharactersInput`<sup>Optional</sup> <a name="RequireLowercaseCharactersInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharactersInput"></a>

```csharp
public object RequireLowercaseCharactersInput { get; }
```

- *Type:* object

---

##### `RequireNumbersInput`<sup>Optional</sup> <a name="RequireNumbersInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbersInput"></a>

```csharp
public object RequireNumbersInput { get; }
```

- *Type:* object

---

##### `RequireSymbolsInput`<sup>Optional</sup> <a name="RequireSymbolsInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbolsInput"></a>

```csharp
public object RequireSymbolsInput { get; }
```

- *Type:* object

---

##### `RequireUppercaseCharactersInput`<sup>Optional</sup> <a name="RequireUppercaseCharactersInput" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharactersInput"></a>

```csharp
public object RequireUppercaseCharactersInput { get; }
```

- *Type:* object

---

##### `AllowUsersToChangePassword`<sup>Required</sup> <a name="AllowUsersToChangePassword" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePassword"></a>

```csharp
public object AllowUsersToChangePassword { get; }
```

- *Type:* object

---

##### `HardExpiry`<sup>Required</sup> <a name="HardExpiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiry"></a>

```csharp
public object HardExpiry { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxPasswordAge`<sup>Required</sup> <a name="MaxPasswordAge" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAge"></a>

```csharp
public double MaxPasswordAge { get; }
```

- *Type:* double

---

##### `MinimumPasswordLength`<sup>Required</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLength"></a>

```csharp
public double MinimumPasswordLength { get; }
```

- *Type:* double

---

##### `PasswordReusePrevention`<sup>Required</sup> <a name="PasswordReusePrevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePrevention"></a>

```csharp
public double PasswordReusePrevention { get; }
```

- *Type:* double

---

##### `RequireLowercaseCharacters`<sup>Required</sup> <a name="RequireLowercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharacters"></a>

```csharp
public object RequireLowercaseCharacters { get; }
```

- *Type:* object

---

##### `RequireNumbers`<sup>Required</sup> <a name="RequireNumbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbers"></a>

```csharp
public object RequireNumbers { get; }
```

- *Type:* object

---

##### `RequireSymbols`<sup>Required</sup> <a name="RequireSymbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbols"></a>

```csharp
public object RequireSymbols { get; }
```

- *Type:* object

---

##### `RequireUppercaseCharacters`<sup>Required</sup> <a name="RequireUppercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharacters"></a>

```csharp
public object RequireUppercaseCharacters { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamAccountPasswordPolicyConfig <a name="IamAccountPasswordPolicyConfig" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IamAccountPasswordPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AllowUsersToChangePassword = null,
    object HardExpiry = null,
    string Id = null,
    double MaxPasswordAge = null,
    double MinimumPasswordLength = null,
    double PasswordReusePrevention = null,
    object RequireLowercaseCharacters = null,
    object RequireNumbers = null,
    object RequireSymbols = null,
    object RequireUppercaseCharacters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.allowUsersToChangePassword">AllowUsersToChangePassword</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.hardExpiry">HardExpiry</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.maxPasswordAge">MaxPasswordAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.passwordReusePrevention">PasswordReusePrevention</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireLowercaseCharacters">RequireLowercaseCharacters</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireNumbers">RequireNumbers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireSymbols">RequireSymbols</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireUppercaseCharacters">RequireUppercaseCharacters</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowUsersToChangePassword`<sup>Optional</sup> <a name="AllowUsersToChangePassword" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.allowUsersToChangePassword"></a>

```csharp
public object AllowUsersToChangePassword { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}.

---

##### `HardExpiry`<sup>Optional</sup> <a name="HardExpiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.hardExpiry"></a>

```csharp
public object HardExpiry { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxPasswordAge`<sup>Optional</sup> <a name="MaxPasswordAge" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.maxPasswordAge"></a>

```csharp
public double MaxPasswordAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}.

---

##### `MinimumPasswordLength`<sup>Optional</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.minimumPasswordLength"></a>

```csharp
public double MinimumPasswordLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}.

---

##### `PasswordReusePrevention`<sup>Optional</sup> <a name="PasswordReusePrevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.passwordReusePrevention"></a>

```csharp
public double PasswordReusePrevention { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}.

---

##### `RequireLowercaseCharacters`<sup>Optional</sup> <a name="RequireLowercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireLowercaseCharacters"></a>

```csharp
public object RequireLowercaseCharacters { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}.

---

##### `RequireNumbers`<sup>Optional</sup> <a name="RequireNumbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireNumbers"></a>

```csharp
public object RequireNumbers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}.

---

##### `RequireSymbols`<sup>Optional</sup> <a name="RequireSymbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireSymbols"></a>

```csharp
public object RequireSymbols { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}.

---

##### `RequireUppercaseCharacters`<sup>Optional</sup> <a name="RequireUppercaseCharacters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireUppercaseCharacters"></a>

```csharp
public object RequireUppercaseCharacters { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}.

---



