# `signerSigningProfilePermission` Submodule <a name="`signerSigningProfilePermission` Submodule" id="@cdktf/provider-aws.signerSigningProfilePermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerSigningProfilePermission <a name="SignerSigningProfilePermission" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission aws_signer_signing_profile_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SignerSigningProfilePermission(Construct Scope, string Id, SignerSigningProfilePermissionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig">SignerSigningProfilePermissionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig">SignerSigningProfilePermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetProfileVersion">ResetProfileVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementId">ResetStatementId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementIdPrefix">ResetStatementIdPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProfileVersion` <a name="ResetProfileVersion" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetProfileVersion"></a>

```csharp
private void ResetProfileVersion()
```

##### `ResetStatementId` <a name="ResetStatementId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementId"></a>

```csharp
private void ResetStatementId()
```

##### `ResetStatementIdPrefix` <a name="ResetStatementIdPrefix" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementIdPrefix"></a>

```csharp
private void ResetStatementIdPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SignerSigningProfilePermission.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SignerSigningProfilePermission.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SignerSigningProfilePermission.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileNameInput">ProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersionInput">ProfileVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdInput">StatementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefixInput">StatementIdPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersion">ProfileVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementId">StatementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefix">StatementIdPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileNameInput"></a>

```csharp
public string ProfileNameInput { get; }
```

- *Type:* string

---

##### `ProfileVersionInput`<sup>Optional</sup> <a name="ProfileVersionInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersionInput"></a>

```csharp
public string ProfileVersionInput { get; }
```

- *Type:* string

---

##### `StatementIdInput`<sup>Optional</sup> <a name="StatementIdInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdInput"></a>

```csharp
public string StatementIdInput { get; }
```

- *Type:* string

---

##### `StatementIdPrefixInput`<sup>Optional</sup> <a name="StatementIdPrefixInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefixInput"></a>

```csharp
public string StatementIdPrefixInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `ProfileVersion`<sup>Required</sup> <a name="ProfileVersion" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersion"></a>

```csharp
public string ProfileVersion { get; }
```

- *Type:* string

---

##### `StatementId`<sup>Required</sup> <a name="StatementId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementId"></a>

```csharp
public string StatementId { get; }
```

- *Type:* string

---

##### `StatementIdPrefix`<sup>Required</sup> <a name="StatementIdPrefix" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefix"></a>

```csharp
public string StatementIdPrefix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SignerSigningProfilePermissionConfig <a name="SignerSigningProfilePermissionConfig" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SignerSigningProfilePermissionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    string Principal,
    string ProfileName,
    string Id = null,
    string ProfileVersion = null,
    string StatementId = null,
    string StatementIdPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#action SignerSigningProfilePermission#action}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#principal SignerSigningProfilePermission#principal}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileName">ProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_name SignerSigningProfilePermission#profile_name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#id SignerSigningProfilePermission#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileVersion">ProfileVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_version SignerSigningProfilePermission#profile_version}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementId">StatementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id SignerSigningProfilePermission#statement_id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementIdPrefix">StatementIdPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#action SignerSigningProfilePermission#action}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#principal SignerSigningProfilePermission#principal}.

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileName"></a>

```csharp
public string ProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_name SignerSigningProfilePermission#profile_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#id SignerSigningProfilePermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProfileVersion`<sup>Optional</sup> <a name="ProfileVersion" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileVersion"></a>

```csharp
public string ProfileVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_version SignerSigningProfilePermission#profile_version}.

---

##### `StatementId`<sup>Optional</sup> <a name="StatementId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementId"></a>

```csharp
public string StatementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id SignerSigningProfilePermission#statement_id}.

---

##### `StatementIdPrefix`<sup>Optional</sup> <a name="StatementIdPrefix" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementIdPrefix"></a>

```csharp
public string StatementIdPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}.

---



