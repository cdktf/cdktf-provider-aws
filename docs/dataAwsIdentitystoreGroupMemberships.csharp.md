# `dataAwsIdentitystoreGroupMemberships` Submodule <a name="`dataAwsIdentitystoreGroupMemberships` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreGroupMemberships <a name="DataAwsIdentitystoreGroupMemberships" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships aws_identitystore_group_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupMemberships(Construct Scope, string Id, DataAwsIdentitystoreGroupMembershipsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig">DataAwsIdentitystoreGroupMembershipsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig">DataAwsIdentitystoreGroupMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsIdentitystoreGroupMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIdentitystoreGroupMemberships.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIdentitystoreGroupMemberships.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIdentitystoreGroupMemberships.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsIdentitystoreGroupMemberships.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsIdentitystoreGroupMemberships resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsIdentitystoreGroupMemberships to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsIdentitystoreGroupMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsIdentitystoreGroupMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupMemberships">GroupMemberships</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList">DataAwsIdentitystoreGroupMembershipsGroupMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.identityStoreIdInput">IdentityStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `GroupMemberships`<sup>Required</sup> <a name="GroupMemberships" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupMemberships"></a>

```csharp
public DataAwsIdentitystoreGroupMembershipsGroupMembershipsList GroupMemberships { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList">DataAwsIdentitystoreGroupMembershipsGroupMembershipsList</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdentityStoreIdInput`<sup>Optional</sup> <a name="IdentityStoreIdInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.identityStoreIdInput"></a>

```csharp
public string IdentityStoreIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMemberships.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreGroupMembershipsConfig <a name="DataAwsIdentitystoreGroupMembershipsConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupMembershipsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupId,
    string IdentityStoreId,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#group_id DataAwsIdentitystoreGroupMemberships#group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#identity_store_id DataAwsIdentitystoreGroupMemberships#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#group_id DataAwsIdentitystoreGroupMemberships#group_id}.

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#identity_store_id DataAwsIdentitystoreGroupMemberships#identity_store_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/identitystore_group_memberships#region DataAwsIdentitystoreGroupMemberships#region}

---

### DataAwsIdentitystoreGroupMembershipsGroupMemberships <a name="DataAwsIdentitystoreGroupMembershipsGroupMemberships" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMemberships.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupMembershipsGroupMemberships {

};
```


### DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId <a name="DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreGroupMembershipsGroupMembershipsList <a name="DataAwsIdentitystoreGroupMembershipsGroupMembershipsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupMembershipsGroupMembershipsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.get"></a>

```csharp
private DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference <a name="DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId">DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId">DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId</a>

---


### DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference <a name="DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.memberId">MemberId</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference">DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.membershipId">MembershipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMemberships">DataAwsIdentitystoreGroupMembershipsGroupMemberships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; }
```

- *Type:* string

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.memberId"></a>

```csharp
public DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference MemberId { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference">DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference</a>

---

##### `MembershipId`<sup>Required</sup> <a name="MembershipId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.membershipId"></a>

```csharp
public string MembershipId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference.property.internalValue"></a>

```csharp
public DataAwsIdentitystoreGroupMembershipsGroupMemberships InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroupMemberships.DataAwsIdentitystoreGroupMembershipsGroupMemberships">DataAwsIdentitystoreGroupMembershipsGroupMemberships</a>

---



