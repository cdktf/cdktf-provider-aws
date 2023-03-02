# `dataAwsIdentitystoreGroup` Submodule <a name="`dataAwsIdentitystoreGroup` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreGroup <a name="DataAwsIdentitystoreGroup" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group aws_identitystore_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroup(Construct Scope, string Id, DataAwsIdentitystoreGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig">DataAwsIdentitystoreGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig">DataAwsIdentitystoreGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier">PutAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetAlternateIdentifier">ResetAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAlternateIdentifier` <a name="PutAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier"></a>

```csharp
private void PutAlternateIdentifier(DataAwsIdentitystoreGroupAlternateIdentifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putFilter"></a>

```csharp
private void PutFilter(DataAwsIdentitystoreGroupFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

---

##### `ResetAlternateIdentifier` <a name="ResetAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetAlternateIdentifier"></a>

```csharp
private void ResetAlternateIdentifier()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIdentitystoreGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIdentitystoreGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIdentitystoreGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifier">AlternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.externalIds">ExternalIds</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList">DataAwsIdentitystoreGroupExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference">DataAwsIdentitystoreGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifierInput">AlternateIdentifierInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreIdInput">IdentityStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AlternateIdentifier`<sup>Required</sup> <a name="AlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifier"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifierOutputReference AlternateIdentifier { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalIds`<sup>Required</sup> <a name="ExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.externalIds"></a>

```csharp
public DataAwsIdentitystoreGroupExternalIdsList ExternalIds { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList">DataAwsIdentitystoreGroupExternalIdsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filter"></a>

```csharp
public DataAwsIdentitystoreGroupFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference">DataAwsIdentitystoreGroupFilterOutputReference</a>

---

##### `AlternateIdentifierInput`<sup>Optional</sup> <a name="AlternateIdentifierInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifierInput"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifier AlternateIdentifierInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filterInput"></a>

```csharp
public DataAwsIdentitystoreGroupFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdentityStoreIdInput`<sup>Optional</sup> <a name="IdentityStoreIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreIdInput"></a>

```csharp
public string IdentityStoreIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreGroupAlternateIdentifier <a name="DataAwsIdentitystoreGroupAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupAlternateIdentifier {
    DataAwsIdentitystoreGroupAlternateIdentifierExternalId ExternalId = null,
    DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute UniqueAttribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.externalId">ExternalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | external_id block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.uniqueAttribute">UniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | unique_attribute block. |

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.externalId"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifierExternalId ExternalId { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#external_id DataAwsIdentitystoreGroup#external_id}

---

##### `UniqueAttribute`<sup>Optional</sup> <a name="UniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.uniqueAttribute"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute UniqueAttribute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

unique_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#unique_attribute DataAwsIdentitystoreGroup#unique_attribute}

---

### DataAwsIdentitystoreGroupAlternateIdentifierExternalId <a name="DataAwsIdentitystoreGroupAlternateIdentifierExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupAlternateIdentifierExternalId {
    string Id,
    string Issuer
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}.

---

### DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute <a name="DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute {
    string AttributePath,
    string AttributeValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributePath">AttributePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}. |

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributePath"></a>

```csharp
public string AttributePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}.

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}.

---

### DataAwsIdentitystoreGroupConfig <a name="DataAwsIdentitystoreGroupConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdentityStoreId,
    DataAwsIdentitystoreGroupAlternateIdentifier AlternateIdentifier = null,
    DataAwsIdentitystoreGroupFilter Filter = null,
    string GroupId = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.alternateIdentifier">AlternateIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}.

---

##### `AlternateIdentifier`<sup>Optional</sup> <a name="AlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.alternateIdentifier"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifier AlternateIdentifier { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#alternate_identifier DataAwsIdentitystoreGroup#alternate_identifier}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.filter"></a>

```csharp
public DataAwsIdentitystoreGroupFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#filter DataAwsIdentitystoreGroup#filter}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsIdentitystoreGroupExternalIds <a name="DataAwsIdentitystoreGroupExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupExternalIds {

};
```


### DataAwsIdentitystoreGroupFilter <a name="DataAwsIdentitystoreGroupFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupFilter {
    string AttributePath,
    string AttributeValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributePath">AttributePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}. |

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributePath"></a>

```csharp
public string AttributePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}.

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifierExternalId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---


### DataAwsIdentitystoreGroupAlternateIdentifierOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupAlternateIdentifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId">PutExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute">PutUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetUniqueAttribute">ResetUniqueAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalId` <a name="PutExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId"></a>

```csharp
private void PutExternalId(DataAwsIdentitystoreGroupAlternateIdentifierExternalId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---

##### `PutUniqueAttribute` <a name="PutUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute"></a>

```csharp
private void PutUniqueAttribute(DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetUniqueAttribute` <a name="ResetUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetUniqueAttribute"></a>

```csharp
private void ResetUniqueAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalId">ExternalId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttribute">UniqueAttribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttributeInput">UniqueAttributeInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalId"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference ExternalId { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference</a>

---

##### `UniqueAttribute`<sup>Required</sup> <a name="UniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttribute"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference UniqueAttribute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference</a>

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalIdInput"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifierExternalId ExternalIdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---

##### `UniqueAttributeInput`<sup>Optional</sup> <a name="UniqueAttributeInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttributeInput"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute UniqueAttributeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifier InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---


### DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput">AttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePath">AttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributePathInput`<sup>Optional</sup> <a name="AttributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput"></a>

```csharp
public string AttributePathInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePath"></a>

```csharp
public string AttributePath { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---


### DataAwsIdentitystoreGroupExternalIdsList <a name="DataAwsIdentitystoreGroupExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupExternalIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get"></a>

```csharp
private DataAwsIdentitystoreGroupExternalIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsIdentitystoreGroupExternalIdsOutputReference <a name="DataAwsIdentitystoreGroupExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupExternalIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds">DataAwsIdentitystoreGroupExternalIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreGroupExternalIds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds">DataAwsIdentitystoreGroupExternalIds</a>

---


### DataAwsIdentitystoreGroupFilterOutputReference <a name="DataAwsIdentitystoreGroupFilterOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePathInput">AttributePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePath">AttributePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributePathInput`<sup>Optional</sup> <a name="AttributePathInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePathInput"></a>

```csharp
public string AttributePathInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `AttributePath`<sup>Required</sup> <a name="AttributePath" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePath"></a>

```csharp
public string AttributePath { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreGroupFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

---



