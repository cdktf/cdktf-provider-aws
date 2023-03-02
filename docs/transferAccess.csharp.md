# `transferAccess` Submodule <a name="`transferAccess` Submodule" id="@cdktf/provider-aws.transferAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferAccess <a name="TransferAccess" id="@cdktf/provider-aws.transferAccess.TransferAccess"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_access aws_transfer_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferAccess(Construct Scope, string Id, TransferAccessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig">TransferAccessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig">TransferAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.putHomeDirectoryMappings">PutHomeDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.putPosixProfile">PutPosixProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectory">ResetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectoryMappings">ResetHomeDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectoryType">ResetHomeDirectoryType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetPosixProfile">ResetPosixProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferAccess.TransferAccess.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transferAccess.TransferAccess.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transferAccess.TransferAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferAccess.TransferAccess.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transferAccess.TransferAccess.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.transferAccess.TransferAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transferAccess.TransferAccess.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transferAccess.TransferAccess.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutHomeDirectoryMappings` <a name="PutHomeDirectoryMappings" id="@cdktf/provider-aws.transferAccess.TransferAccess.putHomeDirectoryMappings"></a>

```csharp
private void PutHomeDirectoryMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferAccess.TransferAccess.putHomeDirectoryMappings.parameter.value"></a>

- *Type:* object

---

##### `PutPosixProfile` <a name="PutPosixProfile" id="@cdktf/provider-aws.transferAccess.TransferAccess.putPosixProfile"></a>

```csharp
private void PutPosixProfile(TransferAccessPosixProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferAccess.TransferAccess.putPosixProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a>

---

##### `ResetHomeDirectory` <a name="ResetHomeDirectory" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectory"></a>

```csharp
private void ResetHomeDirectory()
```

##### `ResetHomeDirectoryMappings` <a name="ResetHomeDirectoryMappings" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectoryMappings"></a>

```csharp
private void ResetHomeDirectoryMappings()
```

##### `ResetHomeDirectoryType` <a name="ResetHomeDirectoryType" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectoryType"></a>

```csharp
private void ResetHomeDirectoryType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetPosixProfile` <a name="ResetPosixProfile" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetPosixProfile"></a>

```csharp
private void ResetPosixProfile()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetRole"></a>

```csharp
private void ResetRole()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transferAccess.TransferAccess.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferAccess.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferAccess.TransferAccess.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferAccess.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferAccess.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryMappings">HomeDirectoryMappings</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList">TransferAccessHomeDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.posixProfile">PosixProfile</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference">TransferAccessPosixProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryInput">HomeDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryMappingsInput">HomeDirectoryMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryTypeInput">HomeDirectoryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.posixProfileInput">PosixProfileInput</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectory">HomeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryType">HomeDirectoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HomeDirectoryMappings`<sup>Required</sup> <a name="HomeDirectoryMappings" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryMappings"></a>

```csharp
public TransferAccessHomeDirectoryMappingsList HomeDirectoryMappings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList">TransferAccessHomeDirectoryMappingsList</a>

---

##### `PosixProfile`<sup>Required</sup> <a name="PosixProfile" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.posixProfile"></a>

```csharp
public TransferAccessPosixProfileOutputReference PosixProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference">TransferAccessPosixProfileOutputReference</a>

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `HomeDirectoryInput`<sup>Optional</sup> <a name="HomeDirectoryInput" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryInput"></a>

```csharp
public string HomeDirectoryInput { get; }
```

- *Type:* string

---

##### `HomeDirectoryMappingsInput`<sup>Optional</sup> <a name="HomeDirectoryMappingsInput" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryMappingsInput"></a>

```csharp
public object HomeDirectoryMappingsInput { get; }
```

- *Type:* object

---

##### `HomeDirectoryTypeInput`<sup>Optional</sup> <a name="HomeDirectoryTypeInput" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryTypeInput"></a>

```csharp
public string HomeDirectoryTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `PosixProfileInput`<sup>Optional</sup> <a name="PosixProfileInput" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.posixProfileInput"></a>

```csharp
public TransferAccessPosixProfile PosixProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a>

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `HomeDirectory`<sup>Required</sup> <a name="HomeDirectory" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectory"></a>

```csharp
public string HomeDirectory { get; }
```

- *Type:* string

---

##### `HomeDirectoryType`<sup>Required</sup> <a name="HomeDirectoryType" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryType"></a>

```csharp
public string HomeDirectoryType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferAccessConfig <a name="TransferAccessConfig" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferAccessConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExternalId,
    string ServerId,
    string HomeDirectory = null,
    object HomeDirectoryMappings = null,
    string HomeDirectoryType = null,
    string Id = null,
    string Policy = null,
    TransferAccessPosixProfile PosixProfile = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#external_id TransferAccess#external_id}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#server_id TransferAccess#server_id}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectory">HomeDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory TransferAccess#home_directory}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectoryMappings">HomeDirectoryMappings</a></code> | <code>object</code> | home_directory_mappings block. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectoryType">HomeDirectoryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory_type TransferAccess#home_directory_type}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#id TransferAccess#id}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#policy TransferAccess#policy}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.posixProfile">PosixProfile</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a></code> | posix_profile block. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#role TransferAccess#role}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#external_id TransferAccess#external_id}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#server_id TransferAccess#server_id}.

---

##### `HomeDirectory`<sup>Optional</sup> <a name="HomeDirectory" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectory"></a>

```csharp
public string HomeDirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory TransferAccess#home_directory}.

---

##### `HomeDirectoryMappings`<sup>Optional</sup> <a name="HomeDirectoryMappings" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectoryMappings"></a>

```csharp
public object HomeDirectoryMappings { get; set; }
```

- *Type:* object

home_directory_mappings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory_mappings TransferAccess#home_directory_mappings}

---

##### `HomeDirectoryType`<sup>Optional</sup> <a name="HomeDirectoryType" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectoryType"></a>

```csharp
public string HomeDirectoryType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory_type TransferAccess#home_directory_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#id TransferAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#policy TransferAccess#policy}.

---

##### `PosixProfile`<sup>Optional</sup> <a name="PosixProfile" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.posixProfile"></a>

```csharp
public TransferAccessPosixProfile PosixProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a>

posix_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#posix_profile TransferAccess#posix_profile}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#role TransferAccess#role}.

---

### TransferAccessHomeDirectoryMappings <a name="TransferAccessHomeDirectoryMappings" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferAccessHomeDirectoryMappings {
    string Entry,
    string Target
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings.property.entry">Entry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#entry TransferAccess#entry}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#target TransferAccess#target}. |

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings.property.entry"></a>

```csharp
public string Entry { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#entry TransferAccess#entry}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#target TransferAccess#target}.

---

### TransferAccessPosixProfile <a name="TransferAccessPosixProfile" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferAccessPosixProfile {
    double Gid,
    double Uid,
    double[] SecondaryGids = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.gid">Gid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#gid TransferAccess#gid}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.uid">Uid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#uid TransferAccess#uid}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.secondaryGids">SecondaryGids</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#secondary_gids TransferAccess#secondary_gids}. |

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.gid"></a>

```csharp
public double Gid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#gid TransferAccess#gid}.

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.uid"></a>

```csharp
public double Uid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#uid TransferAccess#uid}.

---

##### `SecondaryGids`<sup>Optional</sup> <a name="SecondaryGids" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.secondaryGids"></a>

```csharp
public double[] SecondaryGids { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#secondary_gids TransferAccess#secondary_gids}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferAccessHomeDirectoryMappingsList <a name="TransferAccessHomeDirectoryMappingsList" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferAccessHomeDirectoryMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.get"></a>

```csharp
private TransferAccessHomeDirectoryMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TransferAccessHomeDirectoryMappingsOutputReference <a name="TransferAccessHomeDirectoryMappingsOutputReference" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferAccessHomeDirectoryMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.entryInput">EntryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.entry">Entry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.entryInput"></a>

```csharp
public string EntryInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.entry"></a>

```csharp
public string Entry { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TransferAccessPosixProfileOutputReference <a name="TransferAccessPosixProfileOutputReference" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferAccessPosixProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.resetSecondaryGids">ResetSecondaryGids</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryGids` <a name="ResetSecondaryGids" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.resetSecondaryGids"></a>

```csharp
private void ResetSecondaryGids()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.gidInput">GidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.secondaryGidsInput">SecondaryGidsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.uidInput">UidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.gid">Gid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.secondaryGids">SecondaryGids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.uid">Uid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.gidInput"></a>

```csharp
public double GidInput { get; }
```

- *Type:* double

---

##### `SecondaryGidsInput`<sup>Optional</sup> <a name="SecondaryGidsInput" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.secondaryGidsInput"></a>

```csharp
public double[] SecondaryGidsInput { get; }
```

- *Type:* double[]

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.uidInput"></a>

```csharp
public double UidInput { get; }
```

- *Type:* double

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.gid"></a>

```csharp
public double Gid { get; }
```

- *Type:* double

---

##### `SecondaryGids`<sup>Required</sup> <a name="SecondaryGids" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.secondaryGids"></a>

```csharp
public double[] SecondaryGids { get; }
```

- *Type:* double[]

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.uid"></a>

```csharp
public double Uid { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.internalValue"></a>

```csharp
public TransferAccessPosixProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a>

---



