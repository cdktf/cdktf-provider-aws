# `guarddutyOrganizationAdminAccount` Submodule <a name="`guarddutyOrganizationAdminAccount` Submodule" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyOrganizationAdminAccount <a name="GuarddutyOrganizationAdminAccount" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account aws_guardduty_organization_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyOrganizationAdminAccount(Construct Scope, string Id, GuarddutyOrganizationAdminAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig">GuarddutyOrganizationAdminAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig">GuarddutyOrganizationAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GuarddutyOrganizationAdminAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GuarddutyOrganizationAdminAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GuarddutyOrganizationAdminAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.adminAccountIdInput">AdminAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.adminAccountId">AdminAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdminAccountIdInput`<sup>Optional</sup> <a name="AdminAccountIdInput" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.adminAccountIdInput"></a>

```csharp
public string AdminAccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AdminAccountId`<sup>Required</sup> <a name="AdminAccountId" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.adminAccountId"></a>

```csharp
public string AdminAccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyOrganizationAdminAccountConfig <a name="GuarddutyOrganizationAdminAccountConfig" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GuarddutyOrganizationAdminAccountConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AdminAccountId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.adminAccountId">AdminAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account#admin_account_id GuarddutyOrganizationAdminAccount#admin_account_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account#id GuarddutyOrganizationAdminAccount#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdminAccountId`<sup>Required</sup> <a name="AdminAccountId" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.adminAccountId"></a>

```csharp
public string AdminAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account#admin_account_id GuarddutyOrganizationAdminAccount#admin_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyOrganizationAdminAccount.GuarddutyOrganizationAdminAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account#id GuarddutyOrganizationAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



