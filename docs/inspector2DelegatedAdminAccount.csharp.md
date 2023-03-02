# `inspector2DelegatedAdminAccount` Submodule <a name="`inspector2DelegatedAdminAccount` Submodule" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspector2DelegatedAdminAccount <a name="Inspector2DelegatedAdminAccount" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account aws_inspector2_delegated_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Inspector2DelegatedAdminAccount(Construct Scope, string Id, Inspector2DelegatedAdminAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig">Inspector2DelegatedAdminAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig">Inspector2DelegatedAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(Inspector2DelegatedAdminAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Inspector2DelegatedAdminAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Inspector2DelegatedAdminAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Inspector2DelegatedAdminAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.relationshipStatus">RelationshipStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference">Inspector2DelegatedAdminAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RelationshipStatus`<sup>Required</sup> <a name="RelationshipStatus" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.relationshipStatus"></a>

```csharp
public string RelationshipStatus { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeouts"></a>

```csharp
public Inspector2DelegatedAdminAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference">Inspector2DelegatedAdminAccountTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Inspector2DelegatedAdminAccountConfig <a name="Inspector2DelegatedAdminAccountConfig" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Inspector2DelegatedAdminAccountConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Id = null,
    Inspector2DelegatedAdminAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.timeouts"></a>

```csharp
public Inspector2DelegatedAdminAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#timeouts Inspector2DelegatedAdminAccount#timeouts}

---

### Inspector2DelegatedAdminAccountTimeouts <a name="Inspector2DelegatedAdminAccountTimeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Inspector2DelegatedAdminAccountTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspector2DelegatedAdminAccountTimeoutsOutputReference <a name="Inspector2DelegatedAdminAccountTimeoutsOutputReference" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Inspector2DelegatedAdminAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



