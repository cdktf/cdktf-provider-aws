# `dataAwsLakeformationPermissions` Submodule <a name="`dataAwsLakeformationPermissions` Submodule" id="@cdktf/provider-aws.dataAwsLakeformationPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLakeformationPermissions <a name="DataAwsLakeformationPermissions" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions aws_lakeformation_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissions(Construct Scope, string Id, DataAwsLakeformationPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig">DataAwsLakeformationPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig">DataAwsLakeformationPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation">PutDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag">PutLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy">PutLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns">PutTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogResource">ResetCatalogResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDataLocation">ResetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTag">ResetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTagPolicy">ResetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTableWithColumns">ResetTableWithColumns</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase"></a>

```csharp
private void PutDatabase(DataAwsLakeformationPermissionsDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---

##### `PutDataLocation` <a name="PutDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation"></a>

```csharp
private void PutDataLocation(DataAwsLakeformationPermissionsDataLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---

##### `PutLfTag` <a name="PutLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag"></a>

```csharp
private void PutLfTag(DataAwsLakeformationPermissionsLfTag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---

##### `PutLfTagPolicy` <a name="PutLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy"></a>

```csharp
private void PutLfTagPolicy(DataAwsLakeformationPermissionsLfTagPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable"></a>

```csharp
private void PutTable(DataAwsLakeformationPermissionsTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---

##### `PutTableWithColumns` <a name="PutTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns"></a>

```csharp
private void PutTableWithColumns(DataAwsLakeformationPermissionsTableWithColumns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetCatalogResource` <a name="ResetCatalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogResource"></a>

```csharp
private void ResetCatalogResource()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDataLocation` <a name="ResetDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDataLocation"></a>

```csharp
private void ResetDataLocation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLfTag` <a name="ResetLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTag"></a>

```csharp
private void ResetLfTag()
```

##### `ResetLfTagPolicy` <a name="ResetLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTagPolicy"></a>

```csharp
private void ResetLfTagPolicy()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetTableWithColumns` <a name="ResetTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTableWithColumns"></a>

```csharp
private void ResetTableWithColumns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLakeformationPermissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLakeformationPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLakeformationPermissions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference">DataAwsLakeformationPermissionsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference">DataAwsLakeformationPermissionsDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTag">LfTag</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference">DataAwsLakeformationPermissionsLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference">DataAwsLakeformationPermissionsLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.table">Table</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference">DataAwsLakeformationPermissionsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference">DataAwsLakeformationPermissionsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResourceInput">CatalogResourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocationInput">DataLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagInput">LfTagInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicyInput">LfTagPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableInput">TableInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumnsInput">TableWithColumnsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResource">CatalogResource</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principal">Principal</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.database"></a>

```csharp
public DataAwsLakeformationPermissionsDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference">DataAwsLakeformationPermissionsDatabaseOutputReference</a>

---

##### `DataLocation`<sup>Required</sup> <a name="DataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocation"></a>

```csharp
public DataAwsLakeformationPermissionsDataLocationOutputReference DataLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference">DataAwsLakeformationPermissionsDataLocationOutputReference</a>

---

##### `LfTag`<sup>Required</sup> <a name="LfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTag"></a>

```csharp
public DataAwsLakeformationPermissionsLfTagOutputReference LfTag { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference">DataAwsLakeformationPermissionsLfTagOutputReference</a>

---

##### `LfTagPolicy`<sup>Required</sup> <a name="LfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicy"></a>

```csharp
public DataAwsLakeformationPermissionsLfTagPolicyOutputReference LfTagPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference">DataAwsLakeformationPermissionsLfTagPolicyOutputReference</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `PermissionsWithGrantOption`<sup>Required</sup> <a name="PermissionsWithGrantOption" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissionsWithGrantOption"></a>

```csharp
public string[] PermissionsWithGrantOption { get; }
```

- *Type:* string[]

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.table"></a>

```csharp
public DataAwsLakeformationPermissionsTableOutputReference Table { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference">DataAwsLakeformationPermissionsTableOutputReference</a>

---

##### `TableWithColumns`<sup>Required</sup> <a name="TableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumns"></a>

```csharp
public DataAwsLakeformationPermissionsTableWithColumnsOutputReference TableWithColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference">DataAwsLakeformationPermissionsTableWithColumnsOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `CatalogResourceInput`<sup>Optional</sup> <a name="CatalogResourceInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResourceInput"></a>

```csharp
public object CatalogResourceInput { get; }
```

- *Type:* object

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.databaseInput"></a>

```csharp
public DataAwsLakeformationPermissionsDatabase DatabaseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---

##### `DataLocationInput`<sup>Optional</sup> <a name="DataLocationInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocationInput"></a>

```csharp
public DataAwsLakeformationPermissionsDataLocation DataLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LfTagInput`<sup>Optional</sup> <a name="LfTagInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagInput"></a>

```csharp
public DataAwsLakeformationPermissionsLfTag LfTagInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---

##### `LfTagPolicyInput`<sup>Optional</sup> <a name="LfTagPolicyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicyInput"></a>

```csharp
public DataAwsLakeformationPermissionsLfTagPolicy LfTagPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableInput"></a>

```csharp
public DataAwsLakeformationPermissionsTable TableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---

##### `TableWithColumnsInput`<sup>Optional</sup> <a name="TableWithColumnsInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumnsInput"></a>

```csharp
public DataAwsLakeformationPermissionsTableWithColumns TableWithColumnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `CatalogResource`<sup>Required</sup> <a name="CatalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResource"></a>

```csharp
public object CatalogResource { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLakeformationPermissionsConfig <a name="DataAwsLakeformationPermissionsConfig" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Principal,
    string CatalogId = null,
    object CatalogResource = null,
    DataAwsLakeformationPermissionsDatabase Database = null,
    DataAwsLakeformationPermissionsDataLocation DataLocation = null,
    string Id = null,
    DataAwsLakeformationPermissionsLfTag LfTag = null,
    DataAwsLakeformationPermissionsLfTagPolicy LfTagPolicy = null,
    DataAwsLakeformationPermissionsTable Table = null,
    DataAwsLakeformationPermissionsTableWithColumns TableWithColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogResource">CatalogResource</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#id DataAwsLakeformationPermissions#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTag">LfTag</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.table">Table</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | table_with_columns block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `CatalogResource`<sup>Optional</sup> <a name="CatalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogResource"></a>

```csharp
public object CatalogResource { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.database"></a>

```csharp
public DataAwsLakeformationPermissionsDatabase Database { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database DataAwsLakeformationPermissions#database}

---

##### `DataLocation`<sup>Optional</sup> <a name="DataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dataLocation"></a>

```csharp
public DataAwsLakeformationPermissionsDataLocation DataLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

data_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#data_location DataAwsLakeformationPermissions#data_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#id DataAwsLakeformationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LfTag`<sup>Optional</sup> <a name="LfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTag"></a>

```csharp
public DataAwsLakeformationPermissionsLfTag LfTag { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#lf_tag DataAwsLakeformationPermissions#lf_tag}

---

##### `LfTagPolicy`<sup>Optional</sup> <a name="LfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTagPolicy"></a>

```csharp
public DataAwsLakeformationPermissionsLfTagPolicy LfTagPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

lf_tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#lf_tag_policy DataAwsLakeformationPermissions#lf_tag_policy}

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.table"></a>

```csharp
public DataAwsLakeformationPermissionsTable Table { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#table DataAwsLakeformationPermissions#table}

---

##### `TableWithColumns`<sup>Optional</sup> <a name="TableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.tableWithColumns"></a>

```csharp
public DataAwsLakeformationPermissionsTableWithColumns TableWithColumns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#table_with_columns DataAwsLakeformationPermissions#table_with_columns}

---

### DataAwsLakeformationPermissionsDatabase <a name="DataAwsLakeformationPermissionsDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsDatabase {
    string Name,
    string CatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsDataLocation <a name="DataAwsLakeformationPermissionsDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsDataLocation {
    string Arn,
    string CatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#arn DataAwsLakeformationPermissions#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#arn DataAwsLakeformationPermissions#arn}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTag <a name="DataAwsLakeformationPermissionsLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsLfTag {
    string Key,
    string[] Values,
    string CatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTagPolicy <a name="DataAwsLakeformationPermissionsLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsLfTagPolicy {
    object Expression,
    string ResourceType,
    string CatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.expression">Expression</a></code> | <code>object</code> | expression block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#resource_type DataAwsLakeformationPermissions#resource_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.expression"></a>

```csharp
public object Expression { get; set; }
```

- *Type:* object

expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#expression DataAwsLakeformationPermissions#expression}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#resource_type DataAwsLakeformationPermissions#resource_type}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTagPolicyExpression <a name="DataAwsLakeformationPermissionsLfTagPolicyExpression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsLfTagPolicyExpression {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}.

---

### DataAwsLakeformationPermissionsTable <a name="DataAwsLakeformationPermissionsTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsTable {
    string DatabaseName,
    string CatalogId = null,
    string Name = null,
    object Wildcard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.wildcard">Wildcard</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.wildcard"></a>

```csharp
public object Wildcard { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}.

---

### DataAwsLakeformationPermissionsTableWithColumns <a name="DataAwsLakeformationPermissionsTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsTableWithColumns {
    string DatabaseName,
    string Name,
    string CatalogId = null,
    string[] ColumnNames = null,
    string[] ExcludedColumnNames = null,
    object Wildcard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#column_names DataAwsLakeformationPermissions#column_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.wildcard">Wildcard</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#column_names DataAwsLakeformationPermissions#column_names}.

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}.

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.wildcard"></a>

```csharp
public object Wildcard { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLakeformationPermissionsDatabaseOutputReference <a name="DataAwsLakeformationPermissionsDatabaseOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.internalValue"></a>

```csharp
public DataAwsLakeformationPermissionsDatabase InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---


### DataAwsLakeformationPermissionsDataLocationOutputReference <a name="DataAwsLakeformationPermissionsDataLocationOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsDataLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsLakeformationPermissionsDataLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---


### DataAwsLakeformationPermissionsLfTagOutputReference <a name="DataAwsLakeformationPermissionsLfTagOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsLfTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.internalValue"></a>

```csharp
public DataAwsLakeformationPermissionsLfTag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---


### DataAwsLakeformationPermissionsLfTagPolicyExpressionList <a name="DataAwsLakeformationPermissionsLfTagPolicyExpressionList" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsLfTagPolicyExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get"></a>

```csharp
private DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference <a name="DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsLakeformationPermissionsLfTagPolicyOutputReference <a name="DataAwsLakeformationPermissionsLfTagPolicyOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsLfTagPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpression` <a name="PutExpression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression"></a>

```csharp
private void PutExpression(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* object

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList">DataAwsLakeformationPermissionsLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expression"></a>

```csharp
public DataAwsLakeformationPermissionsLfTagPolicyExpressionList Expression { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList">DataAwsLakeformationPermissionsLfTagPolicyExpressionList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput"></a>

```csharp
public object ExpressionInput { get; }
```

- *Type:* object

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsLakeformationPermissionsLfTagPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---


### DataAwsLakeformationPermissionsTableOutputReference <a name="DataAwsLakeformationPermissionsTableOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetWildcard"></a>

```csharp
private void ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcard">Wildcard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcardInput"></a>

```csharp
public object WildcardInput { get; }
```

- *Type:* object

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcard"></a>

```csharp
public object Wildcard { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.internalValue"></a>

```csharp
public DataAwsLakeformationPermissionsTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---


### DataAwsLakeformationPermissionsTableWithColumnsOutputReference <a name="DataAwsLakeformationPermissionsTableWithColumnsOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLakeformationPermissionsTableWithColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```csharp
private void ResetExcludedColumnNames()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetWildcard"></a>

```csharp
private void ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcard">Wildcard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```csharp
public string[] ExcludedColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput"></a>

```csharp
public object WildcardInput { get; }
```

- *Type:* object

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcard"></a>

```csharp
public object Wildcard { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.internalValue"></a>

```csharp
public DataAwsLakeformationPermissionsTableWithColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---



