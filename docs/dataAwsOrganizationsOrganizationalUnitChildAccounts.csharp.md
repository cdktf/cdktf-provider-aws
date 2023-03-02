# `dataAwsOrganizationsOrganizationalUnitChildAccounts` Submodule <a name="`dataAwsOrganizationsOrganizationalUnitChildAccounts` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccounts <a name="DataAwsOrganizationsOrganizationalUnitChildAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts aws_organizations_organizational_unit_child_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitChildAccounts(Construct Scope, string Id, DataAwsOrganizationsOrganizationalUnitChildAccountsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig">DataAwsOrganizationsOrganizationalUnitChildAccountsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig">DataAwsOrganizationsOrganizationalUnitChildAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOrganizationsOrganizationalUnitChildAccounts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOrganizationsOrganizationalUnitChildAccounts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsOrganizationsOrganizationalUnitChildAccounts.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.accounts">Accounts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList">DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.accounts"></a>

```csharp
public DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList Accounts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList">DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccounts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts {

};
```


### DataAwsOrganizationsOrganizationalUnitChildAccountsConfig <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsConfig" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitChildAccountsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ParentId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.parentId">ParentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.parentId"></a>

```csharp
public string ParentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get"></a>

```csharp
private DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference <a name="DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts">DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference.property.internalValue"></a>

```csharp
public DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganizationalUnitChildAccounts.DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts">DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts</a>

---



