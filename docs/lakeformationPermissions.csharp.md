# `lakeformationPermissions` Submodule <a name="`lakeformationPermissions` Submodule" id="@cdktf/provider-aws.lakeformationPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationPermissions <a name="LakeformationPermissions" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions aws_lakeformation_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissions(Construct Scope, string Id, LakeformationPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig">LakeformationPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig">LakeformationPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDataLocation">PutDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTag">PutLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTagPolicy">PutLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTableWithColumns">PutTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogResource">ResetCatalogResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDataLocation">ResetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTag">ResetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTagPolicy">ResetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetPermissionsWithGrantOption">ResetPermissionsWithGrantOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTableWithColumns">ResetTableWithColumns</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDatabase"></a>

```csharp
private void PutDatabase(LakeformationPermissionsDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

---

##### `PutDataLocation` <a name="PutDataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDataLocation"></a>

```csharp
private void PutDataLocation(LakeformationPermissionsDataLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

---

##### `PutLfTag` <a name="PutLfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTag"></a>

```csharp
private void PutLfTag(LakeformationPermissionsLfTag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

---

##### `PutLfTagPolicy` <a name="PutLfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTagPolicy"></a>

```csharp
private void PutLfTagPolicy(LakeformationPermissionsLfTagPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTable"></a>

```csharp
private void PutTable(LakeformationPermissionsTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

---

##### `PutTableWithColumns` <a name="PutTableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTableWithColumns"></a>

```csharp
private void PutTableWithColumns(LakeformationPermissionsTableWithColumns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetCatalogResource` <a name="ResetCatalogResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogResource"></a>

```csharp
private void ResetCatalogResource()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDataLocation` <a name="ResetDataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDataLocation"></a>

```csharp
private void ResetDataLocation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLfTag` <a name="ResetLfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTag"></a>

```csharp
private void ResetLfTag()
```

##### `ResetLfTagPolicy` <a name="ResetLfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTagPolicy"></a>

```csharp
private void ResetLfTagPolicy()
```

##### `ResetPermissionsWithGrantOption` <a name="ResetPermissionsWithGrantOption" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetPermissionsWithGrantOption"></a>

```csharp
private void ResetPermissionsWithGrantOption()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetTableWithColumns` <a name="ResetTableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTableWithColumns"></a>

```csharp
private void ResetTableWithColumns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationPermissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationPermissions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference">LakeformationPermissionsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference">LakeformationPermissionsDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTag">LfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference">LakeformationPermissionsLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference">LakeformationPermissionsLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.table">Table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference">LakeformationPermissionsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference">LakeformationPermissionsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResourceInput">CatalogResourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocationInput">DataLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagInput">LfTagInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicyInput">LfTagPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOptionInput">PermissionsWithGrantOptionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableInput">TableInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumnsInput">TableWithColumnsInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResource">CatalogResource</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principal">Principal</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.database"></a>

```csharp
public LakeformationPermissionsDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference">LakeformationPermissionsDatabaseOutputReference</a>

---

##### `DataLocation`<sup>Required</sup> <a name="DataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocation"></a>

```csharp
public LakeformationPermissionsDataLocationOutputReference DataLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference">LakeformationPermissionsDataLocationOutputReference</a>

---

##### `LfTag`<sup>Required</sup> <a name="LfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTag"></a>

```csharp
public LakeformationPermissionsLfTagOutputReference LfTag { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference">LakeformationPermissionsLfTagOutputReference</a>

---

##### `LfTagPolicy`<sup>Required</sup> <a name="LfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicy"></a>

```csharp
public LakeformationPermissionsLfTagPolicyOutputReference LfTagPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference">LakeformationPermissionsLfTagPolicyOutputReference</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.table"></a>

```csharp
public LakeformationPermissionsTableOutputReference Table { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference">LakeformationPermissionsTableOutputReference</a>

---

##### `TableWithColumns`<sup>Required</sup> <a name="TableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumns"></a>

```csharp
public LakeformationPermissionsTableWithColumnsOutputReference TableWithColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference">LakeformationPermissionsTableWithColumnsOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `CatalogResourceInput`<sup>Optional</sup> <a name="CatalogResourceInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResourceInput"></a>

```csharp
public object CatalogResourceInput { get; }
```

- *Type:* object

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.databaseInput"></a>

```csharp
public LakeformationPermissionsDatabase DatabaseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

---

##### `DataLocationInput`<sup>Optional</sup> <a name="DataLocationInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocationInput"></a>

```csharp
public LakeformationPermissionsDataLocation DataLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LfTagInput`<sup>Optional</sup> <a name="LfTagInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagInput"></a>

```csharp
public LakeformationPermissionsLfTag LfTagInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

---

##### `LfTagPolicyInput`<sup>Optional</sup> <a name="LfTagPolicyInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicyInput"></a>

```csharp
public LakeformationPermissionsLfTagPolicy LfTagPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `PermissionsWithGrantOptionInput`<sup>Optional</sup> <a name="PermissionsWithGrantOptionInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOptionInput"></a>

```csharp
public string[] PermissionsWithGrantOptionInput { get; }
```

- *Type:* string[]

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableInput"></a>

```csharp
public LakeformationPermissionsTable TableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

---

##### `TableWithColumnsInput`<sup>Optional</sup> <a name="TableWithColumnsInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumnsInput"></a>

```csharp
public LakeformationPermissionsTableWithColumns TableWithColumnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `CatalogResource`<sup>Required</sup> <a name="CatalogResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResource"></a>

```csharp
public object CatalogResource { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `PermissionsWithGrantOption`<sup>Required</sup> <a name="PermissionsWithGrantOption" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOption"></a>

```csharp
public string[] PermissionsWithGrantOption { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationPermissionsConfig <a name="LakeformationPermissionsConfig" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Permissions,
    string Principal,
    string CatalogId = null,
    object CatalogResource = null,
    LakeformationPermissionsDatabase Database = null,
    LakeformationPermissionsDataLocation DataLocation = null,
    string Id = null,
    LakeformationPermissionsLfTag LfTag = null,
    LakeformationPermissionsLfTagPolicy LfTagPolicy = null,
    string[] PermissionsWithGrantOption = null,
    LakeformationPermissionsTable Table = null,
    LakeformationPermissionsTableWithColumns TableWithColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissions">Permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions LakeformationPermissions#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#principal LakeformationPermissions#principal}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogResource">CatalogResource</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_resource LakeformationPermissions#catalog_resource}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a></code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#id LakeformationPermissions#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTag">LfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a></code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.table">Table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a></code> | table_with_columns block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions LakeformationPermissions#permissions}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#principal LakeformationPermissions#principal}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

##### `CatalogResource`<sup>Optional</sup> <a name="CatalogResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogResource"></a>

```csharp
public object CatalogResource { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_resource LakeformationPermissions#catalog_resource}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.database"></a>

```csharp
public LakeformationPermissionsDatabase Database { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database LakeformationPermissions#database}

---

##### `DataLocation`<sup>Optional</sup> <a name="DataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dataLocation"></a>

```csharp
public LakeformationPermissionsDataLocation DataLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

data_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#data_location LakeformationPermissions#data_location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#id LakeformationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LfTag`<sup>Optional</sup> <a name="LfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTag"></a>

```csharp
public LakeformationPermissionsLfTag LfTag { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#lf_tag LakeformationPermissions#lf_tag}

---

##### `LfTagPolicy`<sup>Optional</sup> <a name="LfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTagPolicy"></a>

```csharp
public LakeformationPermissionsLfTagPolicy LfTagPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

lf_tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#lf_tag_policy LakeformationPermissions#lf_tag_policy}

---

##### `PermissionsWithGrantOption`<sup>Optional</sup> <a name="PermissionsWithGrantOption" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissionsWithGrantOption"></a>

```csharp
public string[] PermissionsWithGrantOption { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.table"></a>

```csharp
public LakeformationPermissionsTable Table { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#table LakeformationPermissions#table}

---

##### `TableWithColumns`<sup>Optional</sup> <a name="TableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.tableWithColumns"></a>

```csharp
public LakeformationPermissionsTableWithColumns TableWithColumns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#table_with_columns LakeformationPermissions#table_with_columns}

---

### LakeformationPermissionsDatabase <a name="LakeformationPermissionsDatabase" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsDatabase {
    string Name,
    string CatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsDataLocation <a name="LakeformationPermissionsDataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsDataLocation {
    string Arn,
    string CatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#arn LakeformationPermissions#arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#arn LakeformationPermissions#arn}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsLfTag <a name="LakeformationPermissionsLfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsLfTag {
    string Key,
    string[] Values,
    string CatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsLfTagPolicy <a name="LakeformationPermissionsLfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsLfTagPolicy {
    object Expression,
    string ResourceType,
    string CatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.expression">Expression</a></code> | <code>object</code> | expression block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#resource_type LakeformationPermissions#resource_type}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.expression"></a>

```csharp
public object Expression { get; set; }
```

- *Type:* object

expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#expression LakeformationPermissions#expression}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#resource_type LakeformationPermissions#resource_type}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsLfTagPolicyExpression <a name="LakeformationPermissionsLfTagPolicyExpression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsLfTagPolicyExpression {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}.

---

### LakeformationPermissionsTable <a name="LakeformationPermissionsTable" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsTable {
    string DatabaseName,
    string CatalogId = null,
    string Name = null,
    object Wildcard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.wildcard">Wildcard</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}.

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.wildcard"></a>

```csharp
public object Wildcard { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}.

---

### LakeformationPermissionsTableWithColumns <a name="LakeformationPermissionsTableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsTableWithColumns {
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
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#column_names LakeformationPermissions#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#excluded_column_names LakeformationPermissions#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.wildcard">Wildcard</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#column_names LakeformationPermissions#column_names}.

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#excluded_column_names LakeformationPermissions#excluded_column_names}.

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.wildcard"></a>

```csharp
public object Wildcard { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationPermissionsDatabaseOutputReference <a name="LakeformationPermissionsDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.internalValue"></a>

```csharp
public LakeformationPermissionsDatabase InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

---


### LakeformationPermissionsDataLocationOutputReference <a name="LakeformationPermissionsDataLocationOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsDataLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.internalValue"></a>

```csharp
public LakeformationPermissionsDataLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

---


### LakeformationPermissionsLfTagOutputReference <a name="LakeformationPermissionsLfTagOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsLfTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.internalValue"></a>

```csharp
public LakeformationPermissionsLfTag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

---


### LakeformationPermissionsLfTagPolicyExpressionList <a name="LakeformationPermissionsLfTagPolicyExpressionList" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsLfTagPolicyExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.get"></a>

```csharp
private LakeformationPermissionsLfTagPolicyExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationPermissionsLfTagPolicyExpressionOutputReference <a name="LakeformationPermissionsLfTagPolicyExpressionOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsLfTagPolicyExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationPermissionsLfTagPolicyOutputReference <a name="LakeformationPermissionsLfTagPolicyOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsLfTagPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpression` <a name="PutExpression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.putExpression"></a>

```csharp
private void PutExpression(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* object

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList">LakeformationPermissionsLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expression"></a>

```csharp
public LakeformationPermissionsLfTagPolicyExpressionList Expression { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList">LakeformationPermissionsLfTagPolicyExpressionList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput"></a>

```csharp
public object ExpressionInput { get; }
```

- *Type:* object

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.internalValue"></a>

```csharp
public LakeformationPermissionsLfTagPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

---


### LakeformationPermissionsTableOutputReference <a name="LakeformationPermissionsTableOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetWildcard"></a>

```csharp
private void ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcard">Wildcard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcardInput"></a>

```csharp
public object WildcardInput { get; }
```

- *Type:* object

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcard"></a>

```csharp
public object Wildcard { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.internalValue"></a>

```csharp
public LakeformationPermissionsTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

---


### LakeformationPermissionsTableWithColumnsOutputReference <a name="LakeformationPermissionsTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationPermissionsTableWithColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```csharp
private void ResetExcludedColumnNames()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetWildcard"></a>

```csharp
private void ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcard">Wildcard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```csharp
public string[] ExcludedColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput"></a>

```csharp
public object WildcardInput { get; }
```

- *Type:* object

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcard"></a>

```csharp
public object Wildcard { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.internalValue"></a>

```csharp
public LakeformationPermissionsTableWithColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

---



