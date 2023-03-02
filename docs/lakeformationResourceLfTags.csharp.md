# `lakeformationResourceLfTags` Submodule <a name="`lakeformationResourceLfTags` Submodule" id="@cdktf/provider-aws.lakeformationResourceLfTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationResourceLfTags <a name="LakeformationResourceLfTags" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags aws_lakeformation_resource_lf_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTags(Construct Scope, string Id, LakeformationResourceLfTagsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig">LakeformationResourceLfTagsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig">LakeformationResourceLfTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag">PutLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns">PutTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTableWithColumns">ResetTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase"></a>

```csharp
private void PutDatabase(LakeformationResourceLfTagsDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---

##### `PutLfTag` <a name="PutLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag"></a>

```csharp
private void PutLfTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag.parameter.value"></a>

- *Type:* object

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable"></a>

```csharp
private void PutTable(LakeformationResourceLfTagsTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---

##### `PutTableWithColumns` <a name="PutTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns"></a>

```csharp
private void PutTableWithColumns(LakeformationResourceLfTagsTableWithColumns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts"></a>

```csharp
private void PutTimeouts(LakeformationResourceLfTagsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetTableWithColumns` <a name="ResetTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTableWithColumns"></a>

```csharp
private void ResetTableWithColumns()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationResourceLfTags.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationResourceLfTags.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationResourceLfTags.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference">LakeformationResourceLfTagsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTag">LfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList">LakeformationResourceLfTagsLfTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.table">Table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference">LakeformationResourceLfTagsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference">LakeformationResourceLfTagsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference">LakeformationResourceLfTagsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTagInput">LfTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableInput">TableInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumnsInput">TableWithColumnsInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.database"></a>

```csharp
public LakeformationResourceLfTagsDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference">LakeformationResourceLfTagsDatabaseOutputReference</a>

---

##### `LfTag`<sup>Required</sup> <a name="LfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTag"></a>

```csharp
public LakeformationResourceLfTagsLfTagList LfTag { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList">LakeformationResourceLfTagsLfTagList</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.table"></a>

```csharp
public LakeformationResourceLfTagsTableOutputReference Table { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference">LakeformationResourceLfTagsTableOutputReference</a>

---

##### `TableWithColumns`<sup>Required</sup> <a name="TableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumns"></a>

```csharp
public LakeformationResourceLfTagsTableWithColumnsOutputReference TableWithColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference">LakeformationResourceLfTagsTableWithColumnsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeouts"></a>

```csharp
public LakeformationResourceLfTagsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference">LakeformationResourceLfTagsTimeoutsOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.databaseInput"></a>

```csharp
public LakeformationResourceLfTagsDatabase DatabaseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LfTagInput`<sup>Optional</sup> <a name="LfTagInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTagInput"></a>

```csharp
public object LfTagInput { get; }
```

- *Type:* object

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableInput"></a>

```csharp
public LakeformationResourceLfTagsTable TableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---

##### `TableWithColumnsInput`<sup>Optional</sup> <a name="TableWithColumnsInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumnsInput"></a>

```csharp
public LakeformationResourceLfTagsTableWithColumns TableWithColumnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationResourceLfTagsConfig <a name="LakeformationResourceLfTagsConfig" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object LfTag,
    string CatalogId = null,
    LakeformationResourceLfTagsDatabase Database = null,
    string Id = null,
    LakeformationResourceLfTagsTable Table = null,
    LakeformationResourceLfTagsTableWithColumns TableWithColumns = null,
    LakeformationResourceLfTagsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lfTag">LfTag</a></code> | <code>object</code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.table">Table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | table_with_columns block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LfTag`<sup>Required</sup> <a name="LfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lfTag"></a>

```csharp
public object LfTag { get; set; }
```

- *Type:* object

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#lf_tag LakeformationResourceLfTags#lf_tag}

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.database"></a>

```csharp
public LakeformationResourceLfTagsDatabase Database { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database LakeformationResourceLfTags#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.table"></a>

```csharp
public LakeformationResourceLfTagsTable Table { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table LakeformationResourceLfTags#table}

---

##### `TableWithColumns`<sup>Optional</sup> <a name="TableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.tableWithColumns"></a>

```csharp
public LakeformationResourceLfTagsTableWithColumns TableWithColumns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table_with_columns LakeformationResourceLfTags#table_with_columns}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.timeouts"></a>

```csharp
public LakeformationResourceLfTagsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#timeouts LakeformationResourceLfTags#timeouts}

---

### LakeformationResourceLfTagsDatabase <a name="LakeformationResourceLfTagsDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsDatabase {
    string Name,
    string CatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

### LakeformationResourceLfTagsLfTag <a name="LakeformationResourceLfTagsLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsLfTag {
    string Key,
    string Value,
    string CatalogId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#key LakeformationResourceLfTags#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#value LakeformationResourceLfTags#value}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#key LakeformationResourceLfTags#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#value LakeformationResourceLfTags#value}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

### LakeformationResourceLfTagsTable <a name="LakeformationResourceLfTagsTable" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsTable {
    string DatabaseName,
    string CatalogId = null,
    string Name = null,
    object Wildcard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.wildcard">Wildcard</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.wildcard"></a>

```csharp
public object Wildcard { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}.

---

### LakeformationResourceLfTagsTableWithColumns <a name="LakeformationResourceLfTagsTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsTableWithColumns {
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
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#column_names LakeformationResourceLfTags#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#excluded_column_names LakeformationResourceLfTags#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.wildcard">Wildcard</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#column_names LakeformationResourceLfTags#column_names}.

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#excluded_column_names LakeformationResourceLfTags#excluded_column_names}.

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.wildcard"></a>

```csharp
public object Wildcard { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}.

---

### LakeformationResourceLfTagsTimeouts <a name="LakeformationResourceLfTagsTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#create LakeformationResourceLfTags#create}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#delete LakeformationResourceLfTags#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#create LakeformationResourceLfTags#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#delete LakeformationResourceLfTags#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationResourceLfTagsDatabaseOutputReference <a name="LakeformationResourceLfTagsDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.internalValue"></a>

```csharp
public LakeformationResourceLfTagsDatabase InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---


### LakeformationResourceLfTagsLfTagList <a name="LakeformationResourceLfTagsLfTagList" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsLfTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get"></a>

```csharp
private LakeformationResourceLfTagsLfTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationResourceLfTagsLfTagOutputReference <a name="LakeformationResourceLfTagsLfTagOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsLfTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LakeformationResourceLfTagsTableOutputReference <a name="LakeformationResourceLfTagsTableOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetWildcard"></a>

```csharp
private void ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcard">Wildcard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcardInput"></a>

```csharp
public object WildcardInput { get; }
```

- *Type:* object

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcard"></a>

```csharp
public object Wildcard { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.internalValue"></a>

```csharp
public LakeformationResourceLfTagsTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---


### LakeformationResourceLfTagsTableWithColumnsOutputReference <a name="LakeformationResourceLfTagsTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsTableWithColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```csharp
private void ResetExcludedColumnNames()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetWildcard"></a>

```csharp
private void ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcard">Wildcard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```csharp
public string[] ExcludedColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcardInput"></a>

```csharp
public object WildcardInput { get; }
```

- *Type:* object

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcard"></a>

```csharp
public object Wildcard { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.internalValue"></a>

```csharp
public LakeformationResourceLfTagsTableWithColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---


### LakeformationResourceLfTagsTimeoutsOutputReference <a name="LakeformationResourceLfTagsTimeoutsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceLfTagsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



