# `cognitoIdentityPoolProviderPrincipalTag` Submodule <a name="`cognitoIdentityPoolProviderPrincipalTag` Submodule" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolProviderPrincipalTag <a name="CognitoIdentityPoolProviderPrincipalTag" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag aws_cognito_identity_pool_provider_principal_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoIdentityPoolProviderPrincipalTag(Construct Scope, string Id, CognitoIdentityPoolProviderPrincipalTagConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig">CognitoIdentityPoolProviderPrincipalTagConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig">CognitoIdentityPoolProviderPrincipalTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetPrincipalTags">ResetPrincipalTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetUseDefaults">ResetUseDefaults</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalTags` <a name="ResetPrincipalTags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetPrincipalTags"></a>

```csharp
private void ResetPrincipalTags()
```

##### `ResetUseDefaults` <a name="ResetUseDefaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetUseDefaults"></a>

```csharp
private void ResetUseDefaults()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoIdentityPoolProviderPrincipalTag.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoIdentityPoolProviderPrincipalTag.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoIdentityPoolProviderPrincipalTag.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderNameInput">IdentityProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTagsInput">PrincipalTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaultsInput">UseDefaultsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderName">IdentityProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTags">PrincipalTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaults">UseDefaults</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolIdInput"></a>

```csharp
public string IdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `IdentityProviderNameInput`<sup>Optional</sup> <a name="IdentityProviderNameInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderNameInput"></a>

```csharp
public string IdentityProviderNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalTagsInput`<sup>Optional</sup> <a name="PrincipalTagsInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PrincipalTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseDefaultsInput`<sup>Optional</sup> <a name="UseDefaultsInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaultsInput"></a>

```csharp
public object UseDefaultsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `IdentityProviderName`<sup>Required</sup> <a name="IdentityProviderName" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderName"></a>

```csharp
public string IdentityProviderName { get; }
```

- *Type:* string

---

##### `PrincipalTags`<sup>Required</sup> <a name="PrincipalTags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PrincipalTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseDefaults`<sup>Required</sup> <a name="UseDefaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaults"></a>

```csharp
public object UseDefaults { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolProviderPrincipalTagConfig <a name="CognitoIdentityPoolProviderPrincipalTagConfig" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoIdentityPoolProviderPrincipalTagConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdentityPoolId,
    string IdentityProviderName,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> PrincipalTags = null,
    object UseDefaults = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityProviderName">IdentityProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.principalTags">PrincipalTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.useDefaults">UseDefaults</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}.

---

##### `IdentityProviderName`<sup>Required</sup> <a name="IdentityProviderName" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityProviderName"></a>

```csharp
public string IdentityProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalTags`<sup>Optional</sup> <a name="PrincipalTags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.principalTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PrincipalTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}.

---

##### `UseDefaults`<sup>Optional</sup> <a name="UseDefaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.useDefaults"></a>

```csharp
public object UseDefaults { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}.

---



