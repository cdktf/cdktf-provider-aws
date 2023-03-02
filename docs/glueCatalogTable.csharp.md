# `glueCatalogTable` Submodule <a name="`glueCatalogTable` Submodule" id="@cdktf/provider-aws.glueCatalogTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogTable <a name="GlueCatalogTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table aws_glue_catalog_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTable(Construct Scope, string Id, GlueCatalogTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig">GlueCatalogTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig">GlueCatalogTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex">PutPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys">PutPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor">PutStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable">PutTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionKeys">ResetPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetRetention">ResetRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetStorageDescriptor">ResetStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTableType">ResetTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTargetTable">ResetTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewExpandedText">ResetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewOriginalText">ResetViewOriginalText</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPartitionIndex` <a name="PutPartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex"></a>

```csharp
private void PutPartitionIndex(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex.parameter.value"></a>

- *Type:* object

---

##### `PutPartitionKeys` <a name="PutPartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys"></a>

```csharp
private void PutPartitionKeys(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys.parameter.value"></a>

- *Type:* object

---

##### `PutStorageDescriptor` <a name="PutStorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor"></a>

```csharp
private void PutStorageDescriptor(GlueCatalogTableStorageDescriptor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---

##### `PutTargetTable` <a name="PutTargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable"></a>

```csharp
private void PutTargetTable(GlueCatalogTableTargetTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionIndex"></a>

```csharp
private void ResetPartitionIndex()
```

##### `ResetPartitionKeys` <a name="ResetPartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionKeys"></a>

```csharp
private void ResetPartitionKeys()
```

##### `ResetRetention` <a name="ResetRetention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetRetention"></a>

```csharp
private void ResetRetention()
```

##### `ResetStorageDescriptor` <a name="ResetStorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetStorageDescriptor"></a>

```csharp
private void ResetStorageDescriptor()
```

##### `ResetTableType` <a name="ResetTableType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTableType"></a>

```csharp
private void ResetTableType()
```

##### `ResetTargetTable` <a name="ResetTargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTargetTable"></a>

```csharp
private void ResetTargetTable()
```

##### `ResetViewExpandedText` <a name="ResetViewExpandedText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewExpandedText"></a>

```csharp
private void ResetViewExpandedText()
```

##### `ResetViewOriginalText` <a name="ResetViewOriginalText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewOriginalText"></a>

```csharp
private void ResetViewOriginalText()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueCatalogTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueCatalogTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueCatalogTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndex">PartitionIndex</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList">GlueCatalogTablePartitionIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeys">PartitionKeys</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList">GlueCatalogTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference">GlueCatalogTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference">GlueCatalogTableTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeysInput">PartitionKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retentionInput">RetentionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptorInput">StorageDescriptorInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableTypeInput">TableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTableInput">TargetTableInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedTextInput">ViewExpandedTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalTextInput">ViewOriginalTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retention">Retention</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableType">TableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedText">ViewExpandedText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalText">ViewOriginalText</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndex"></a>

```csharp
public GlueCatalogTablePartitionIndexList PartitionIndex { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList">GlueCatalogTablePartitionIndexList</a>

---

##### `PartitionKeys`<sup>Required</sup> <a name="PartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeys"></a>

```csharp
public GlueCatalogTablePartitionKeysList PartitionKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList">GlueCatalogTablePartitionKeysList</a>

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptor"></a>

```csharp
public GlueCatalogTableStorageDescriptorOutputReference StorageDescriptor { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference">GlueCatalogTableStorageDescriptorOutputReference</a>

---

##### `TargetTable`<sup>Required</sup> <a name="TargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTable"></a>

```csharp
public GlueCatalogTableTargetTableOutputReference TargetTable { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference">GlueCatalogTableTargetTableOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndexInput"></a>

```csharp
public object PartitionIndexInput { get; }
```

- *Type:* object

---

##### `PartitionKeysInput`<sup>Optional</sup> <a name="PartitionKeysInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeysInput"></a>

```csharp
public object PartitionKeysInput { get; }
```

- *Type:* object

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retentionInput"></a>

```csharp
public double RetentionInput { get; }
```

- *Type:* double

---

##### `StorageDescriptorInput`<sup>Optional</sup> <a name="StorageDescriptorInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptorInput"></a>

```csharp
public GlueCatalogTableStorageDescriptor StorageDescriptorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---

##### `TableTypeInput`<sup>Optional</sup> <a name="TableTypeInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableTypeInput"></a>

```csharp
public string TableTypeInput { get; }
```

- *Type:* string

---

##### `TargetTableInput`<sup>Optional</sup> <a name="TargetTableInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTableInput"></a>

```csharp
public GlueCatalogTableTargetTable TargetTableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---

##### `ViewExpandedTextInput`<sup>Optional</sup> <a name="ViewExpandedTextInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedTextInput"></a>

```csharp
public string ViewExpandedTextInput { get; }
```

- *Type:* string

---

##### `ViewOriginalTextInput`<sup>Optional</sup> <a name="ViewOriginalTextInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalTextInput"></a>

```csharp
public string ViewOriginalTextInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retention"></a>

```csharp
public double Retention { get; }
```

- *Type:* double

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableType"></a>

```csharp
public string TableType { get; }
```

- *Type:* string

---

##### `ViewExpandedText`<sup>Required</sup> <a name="ViewExpandedText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedText"></a>

```csharp
public string ViewExpandedText { get; }
```

- *Type:* string

---

##### `ViewOriginalText`<sup>Required</sup> <a name="ViewOriginalText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalText"></a>

```csharp
public string ViewOriginalText { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogTableConfig <a name="GlueCatalogTableConfig" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseName,
    string Name,
    string CatalogId = null,
    string Description = null,
    string Id = null,
    string Owner = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    object PartitionIndex = null,
    object PartitionKeys = null,
    double Retention = null,
    GlueCatalogTableStorageDescriptor StorageDescriptor = null,
    string TableType = null,
    GlueCatalogTableTargetTable TargetTable = null,
    string ViewExpandedText = null,
    string ViewOriginalText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#description GlueCatalogTable#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#id GlueCatalogTable#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#owner GlueCatalogTable#owner}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionIndex">PartitionIndex</a></code> | <code>object</code> | partition_index block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionKeys">PartitionKeys</a></code> | <code>object</code> | partition_keys block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.retention">Retention</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#retention GlueCatalogTable#retention}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.tableType">TableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#table_type GlueCatalogTable#table_type}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | target_table block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewExpandedText">ViewExpandedText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewOriginalText">ViewOriginalText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#description GlueCatalogTable#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#id GlueCatalogTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#owner GlueCatalogTable#owner}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionIndex"></a>

```csharp
public object PartitionIndex { get; set; }
```

- *Type:* object

partition_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#partition_index GlueCatalogTable#partition_index}

---

##### `PartitionKeys`<sup>Optional</sup> <a name="PartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionKeys"></a>

```csharp
public object PartitionKeys { get; set; }
```

- *Type:* object

partition_keys block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#partition_keys GlueCatalogTable#partition_keys}

---

##### `Retention`<sup>Optional</sup> <a name="Retention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.retention"></a>

```csharp
public double Retention { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#retention GlueCatalogTable#retention}.

---

##### `StorageDescriptor`<sup>Optional</sup> <a name="StorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.storageDescriptor"></a>

```csharp
public GlueCatalogTableStorageDescriptor StorageDescriptor { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#storage_descriptor GlueCatalogTable#storage_descriptor}

---

##### `TableType`<sup>Optional</sup> <a name="TableType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.tableType"></a>

```csharp
public string TableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#table_type GlueCatalogTable#table_type}.

---

##### `TargetTable`<sup>Optional</sup> <a name="TargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.targetTable"></a>

```csharp
public GlueCatalogTableTargetTable TargetTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

target_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#target_table GlueCatalogTable#target_table}

---

##### `ViewExpandedText`<sup>Optional</sup> <a name="ViewExpandedText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewExpandedText"></a>

```csharp
public string ViewExpandedText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}.

---

##### `ViewOriginalText`<sup>Optional</sup> <a name="ViewOriginalText" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewOriginalText"></a>

```csharp
public string ViewOriginalText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}.

---

### GlueCatalogTablePartitionIndex <a name="GlueCatalogTablePartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTablePartitionIndex {
    string IndexName,
    string[] Keys
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.indexName">IndexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#index_name GlueCatalogTable#index_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.keys">Keys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#keys GlueCatalogTable#keys}. |

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#index_name GlueCatalogTable#index_name}.

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.keys"></a>

```csharp
public string[] Keys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#keys GlueCatalogTable#keys}.

---

### GlueCatalogTablePartitionKeys <a name="GlueCatalogTablePartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTablePartitionKeys {
    string Name,
    string Comment = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableStorageDescriptor <a name="GlueCatalogTableStorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptor {
    string[] BucketColumns = null,
    object Columns = null,
    object Compressed = null,
    string InputFormat = null,
    string Location = null,
    double NumberOfBuckets = null,
    string OutputFormat = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    GlueCatalogTableStorageDescriptorSchemaReference SchemaReference = null,
    GlueCatalogTableStorageDescriptorSerDeInfo SerDeInfo = null,
    GlueCatalogTableStorageDescriptorSkewedInfo SkewedInfo = null,
    object SortColumns = null,
    object StoredAsSubDirectories = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.bucketColumns">BucketColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.columns">Columns</a></code> | <code>object</code> | columns block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.compressed">Compressed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#compressed GlueCatalogTable#compressed}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.inputFormat">InputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#input_format GlueCatalogTable#input_format}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#location GlueCatalogTable#location}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.numberOfBuckets">NumberOfBuckets</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.outputFormat">OutputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#output_format GlueCatalogTable#output_format}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.schemaReference">SchemaReference</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | schema_reference block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.serDeInfo">SerDeInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | ser_de_info block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.sortColumns">SortColumns</a></code> | <code>object</code> | sort_columns block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.storedAsSubDirectories">StoredAsSubDirectories</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}. |

---

##### `BucketColumns`<sup>Optional</sup> <a name="BucketColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.bucketColumns"></a>

```csharp
public string[] BucketColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}.

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.columns"></a>

```csharp
public object Columns { get; set; }
```

- *Type:* object

columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#columns GlueCatalogTable#columns}

---

##### `Compressed`<sup>Optional</sup> <a name="Compressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.compressed"></a>

```csharp
public object Compressed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#compressed GlueCatalogTable#compressed}.

---

##### `InputFormat`<sup>Optional</sup> <a name="InputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.inputFormat"></a>

```csharp
public string InputFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#input_format GlueCatalogTable#input_format}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#location GlueCatalogTable#location}.

---

##### `NumberOfBuckets`<sup>Optional</sup> <a name="NumberOfBuckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.numberOfBuckets"></a>

```csharp
public double NumberOfBuckets { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}.

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#output_format GlueCatalogTable#output_format}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `SchemaReference`<sup>Optional</sup> <a name="SchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.schemaReference"></a>

```csharp
public GlueCatalogTableStorageDescriptorSchemaReference SchemaReference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

schema_reference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_reference GlueCatalogTable#schema_reference}

---

##### `SerDeInfo`<sup>Optional</sup> <a name="SerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.serDeInfo"></a>

```csharp
public GlueCatalogTableStorageDescriptorSerDeInfo SerDeInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

ser_de_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#ser_de_info GlueCatalogTable#ser_de_info}

---

##### `SkewedInfo`<sup>Optional</sup> <a name="SkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.skewedInfo"></a>

```csharp
public GlueCatalogTableStorageDescriptorSkewedInfo SkewedInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_info GlueCatalogTable#skewed_info}

---

##### `SortColumns`<sup>Optional</sup> <a name="SortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.sortColumns"></a>

```csharp
public object SortColumns { get; set; }
```

- *Type:* object

sort_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#sort_columns GlueCatalogTable#sort_columns}

---

##### `StoredAsSubDirectories`<sup>Optional</sup> <a name="StoredAsSubDirectories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.storedAsSubDirectories"></a>

```csharp
public object StoredAsSubDirectories { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}.

---

### GlueCatalogTableStorageDescriptorColumns <a name="GlueCatalogTableStorageDescriptorColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorColumns {
    string Name,
    string Comment = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableStorageDescriptorSchemaReference <a name="GlueCatalogTableStorageDescriptorSchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSchemaReference {
    double SchemaVersionNumber,
    GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId SchemaId = null,
    string SchemaVersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionNumber">SchemaVersionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaId">SchemaId</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | schema_id block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionId">SchemaVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}. |

---

##### `SchemaVersionNumber`<sup>Required</sup> <a name="SchemaVersionNumber" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```csharp
public double SchemaVersionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}.

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaId"></a>

```csharp
public GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId SchemaId { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

schema_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_id GlueCatalogTable#schema_id}

---

##### `SchemaVersionId`<sup>Optional</sup> <a name="SchemaVersionId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```csharp
public string SchemaVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}.

---

### GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId <a name="GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
    string RegistryName = null,
    string SchemaArn = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.registryName">RegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#registry_name GlueCatalogTable#registry_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">SchemaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_name GlueCatalogTable#schema_name}. |

---

##### `RegistryName`<sup>Optional</sup> <a name="RegistryName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```csharp
public string RegistryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#registry_name GlueCatalogTable#registry_name}.

---

##### `SchemaArn`<sup>Optional</sup> <a name="SchemaArn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```csharp
public string SchemaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_name GlueCatalogTable#schema_name}.

---

### GlueCatalogTableStorageDescriptorSerDeInfo <a name="GlueCatalogTableStorageDescriptorSerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSerDeInfo {
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string SerializationLibrary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.serializationLibrary">SerializationLibrary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `SerializationLibrary`<sup>Optional</sup> <a name="SerializationLibrary" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.serializationLibrary"></a>

```csharp
public string SerializationLibrary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}.

---

### GlueCatalogTableStorageDescriptorSkewedInfo <a name="GlueCatalogTableStorageDescriptorSkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSkewedInfo {
    string[] SkewedColumnNames = null,
    System.Collections.Generic.IDictionary<string, string> SkewedColumnValueLocationMaps = null,
    string[] SkewedColumnValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnNames">SkewedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">SkewedColumnValueLocationMaps</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValues">SkewedColumnValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}. |

---

##### `SkewedColumnNames`<sup>Optional</sup> <a name="SkewedColumnNames" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```csharp
public string[] SkewedColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}.

---

##### `SkewedColumnValueLocationMaps`<sup>Optional</sup> <a name="SkewedColumnValueLocationMaps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SkewedColumnValueLocationMaps { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}.

---

##### `SkewedColumnValues`<sup>Optional</sup> <a name="SkewedColumnValues" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```csharp
public string[] SkewedColumnValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}.

---

### GlueCatalogTableStorageDescriptorSortColumns <a name="GlueCatalogTableStorageDescriptorSortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSortColumns {
    string Column,
    double SortOrder
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.column">Column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#column GlueCatalogTable#column}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.sortOrder">SortOrder</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#sort_order GlueCatalogTable#sort_order}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.column"></a>

```csharp
public string Column { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#column GlueCatalogTable#column}.

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.sortOrder"></a>

```csharp
public double SortOrder { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#sort_order GlueCatalogTable#sort_order}.

---

### GlueCatalogTableTargetTable <a name="GlueCatalogTableTargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableTargetTable {
    string CatalogId,
    string DatabaseName,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogTablePartitionIndexList <a name="GlueCatalogTablePartitionIndexList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTablePartitionIndexList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get"></a>

```csharp
private GlueCatalogTablePartitionIndexOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCatalogTablePartitionIndexOutputReference <a name="GlueCatalogTablePartitionIndexOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTablePartitionIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexStatus">IndexStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keysInput">KeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keys">Keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexStatus`<sup>Required</sup> <a name="IndexStatus" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexStatus"></a>

```csharp
public string IndexStatus { get; }
```

- *Type:* string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `KeysInput`<sup>Optional</sup> <a name="KeysInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keysInput"></a>

```csharp
public string[] KeysInput { get; }
```

- *Type:* string[]

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keys"></a>

```csharp
public string[] Keys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCatalogTablePartitionKeysList <a name="GlueCatalogTablePartitionKeysList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTablePartitionKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get"></a>

```csharp
private GlueCatalogTablePartitionKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCatalogTablePartitionKeysOutputReference <a name="GlueCatalogTablePartitionKeysOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTablePartitionKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCatalogTableStorageDescriptorColumnsList <a name="GlueCatalogTableStorageDescriptorColumnsList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get"></a>

```csharp
private GlueCatalogTableStorageDescriptorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCatalogTableStorageDescriptorColumnsOutputReference <a name="GlueCatalogTableStorageDescriptorColumnsOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCatalogTableStorageDescriptorOutputReference <a name="GlueCatalogTableStorageDescriptorOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference">PutSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo">PutSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo">PutSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns">PutSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetBucketColumns">ResetBucketColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetCompressed">ResetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetInputFormat">ResetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetNumberOfBuckets">ResetNumberOfBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSchemaReference">ResetSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSerDeInfo">ResetSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSkewedInfo">ResetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSortColumns">ResetSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetStoredAsSubDirectories">ResetStoredAsSubDirectories</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns"></a>

```csharp
private void PutColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* object

---

##### `PutSchemaReference` <a name="PutSchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference"></a>

```csharp
private void PutSchemaReference(GlueCatalogTableStorageDescriptorSchemaReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---

##### `PutSerDeInfo` <a name="PutSerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo"></a>

```csharp
private void PutSerDeInfo(GlueCatalogTableStorageDescriptorSerDeInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---

##### `PutSkewedInfo` <a name="PutSkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```csharp
private void PutSkewedInfo(GlueCatalogTableStorageDescriptorSkewedInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---

##### `PutSortColumns` <a name="PutSortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns"></a>

```csharp
private void PutSortColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* object

---

##### `ResetBucketColumns` <a name="ResetBucketColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetBucketColumns"></a>

```csharp
private void ResetBucketColumns()
```

##### `ResetColumns` <a name="ResetColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetColumns"></a>

```csharp
private void ResetColumns()
```

##### `ResetCompressed` <a name="ResetCompressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetCompressed"></a>

```csharp
private void ResetCompressed()
```

##### `ResetInputFormat` <a name="ResetInputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetInputFormat"></a>

```csharp
private void ResetInputFormat()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetNumberOfBuckets` <a name="ResetNumberOfBuckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```csharp
private void ResetNumberOfBuckets()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSchemaReference` <a name="ResetSchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSchemaReference"></a>

```csharp
private void ResetSchemaReference()
```

##### `ResetSerDeInfo` <a name="ResetSerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSerDeInfo"></a>

```csharp
private void ResetSerDeInfo()
```

##### `ResetSkewedInfo` <a name="ResetSkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```csharp
private void ResetSkewedInfo()
```

##### `ResetSortColumns` <a name="ResetSortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSortColumns"></a>

```csharp
private void ResetSortColumns()
```

##### `ResetStoredAsSubDirectories` <a name="ResetStoredAsSubDirectories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```csharp
private void ResetStoredAsSubDirectories()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList">GlueCatalogTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReference">SchemaReference</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo">SerDeInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference">GlueCatalogTableStorageDescriptorSerDeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference">GlueCatalogTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumns">SortColumns</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList">GlueCatalogTableStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumnsInput">BucketColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressedInput">CompressedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBucketsInput">NumberOfBucketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReferenceInput">SchemaReferenceInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfoInput">SerDeInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfoInput">SkewedInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumnsInput">SortColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">StoredAsSubDirectoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns">BucketColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressed">Compressed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets">NumberOfBuckets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories">StoredAsSubDirectories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columns"></a>

```csharp
public GlueCatalogTableStorageDescriptorColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList">GlueCatalogTableStorageDescriptorColumnsList</a>

---

##### `SchemaReference`<sup>Required</sup> <a name="SchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReference"></a>

```csharp
public GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference SchemaReference { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `SerDeInfo`<sup>Required</sup> <a name="SerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo"></a>

```csharp
public GlueCatalogTableStorageDescriptorSerDeInfoOutputReference SerDeInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference">GlueCatalogTableStorageDescriptorSerDeInfoOutputReference</a>

---

##### `SkewedInfo`<sup>Required</sup> <a name="SkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```csharp
public GlueCatalogTableStorageDescriptorSkewedInfoOutputReference SkewedInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference">GlueCatalogTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `SortColumns`<sup>Required</sup> <a name="SortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumns"></a>

```csharp
public GlueCatalogTableStorageDescriptorSortColumnsList SortColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList">GlueCatalogTableStorageDescriptorSortColumnsList</a>

---

##### `BucketColumnsInput`<sup>Optional</sup> <a name="BucketColumnsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```csharp
public string[] BucketColumnsInput { get; }
```

- *Type:* string[]

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columnsInput"></a>

```csharp
public object ColumnsInput { get; }
```

- *Type:* object

---

##### `CompressedInput`<sup>Optional</sup> <a name="CompressedInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressedInput"></a>

```csharp
public object CompressedInput { get; }
```

- *Type:* object

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```csharp
public string InputFormatInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NumberOfBucketsInput`<sup>Optional</sup> <a name="NumberOfBucketsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```csharp
public double NumberOfBucketsInput { get; }
```

- *Type:* double

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaReferenceInput`<sup>Optional</sup> <a name="SchemaReferenceInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```csharp
public GlueCatalogTableStorageDescriptorSchemaReference SchemaReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---

##### `SerDeInfoInput`<sup>Optional</sup> <a name="SerDeInfoInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfoInput"></a>

```csharp
public GlueCatalogTableStorageDescriptorSerDeInfo SerDeInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---

##### `SkewedInfoInput`<sup>Optional</sup> <a name="SkewedInfoInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```csharp
public GlueCatalogTableStorageDescriptorSkewedInfo SkewedInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---

##### `SortColumnsInput`<sup>Optional</sup> <a name="SortColumnsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```csharp
public object SortColumnsInput { get; }
```

- *Type:* object

---

##### `StoredAsSubDirectoriesInput`<sup>Optional</sup> <a name="StoredAsSubDirectoriesInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```csharp
public object StoredAsSubDirectoriesInput { get; }
```

- *Type:* object

---

##### `BucketColumns`<sup>Required</sup> <a name="BucketColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns"></a>

```csharp
public string[] BucketColumns { get; }
```

- *Type:* string[]

---

##### `Compressed`<sup>Required</sup> <a name="Compressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressed"></a>

```csharp
public object Compressed { get; }
```

- *Type:* object

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormat"></a>

```csharp
public string InputFormat { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `NumberOfBuckets`<sup>Required</sup> <a name="NumberOfBuckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```csharp
public double NumberOfBuckets { get; }
```

- *Type:* double

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StoredAsSubDirectories`<sup>Required</sup> <a name="StoredAsSubDirectories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```csharp
public object StoredAsSubDirectories { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.internalValue"></a>

```csharp
public GlueCatalogTableStorageDescriptor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---


### GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference <a name="GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId">PutSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">ResetSchemaVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaId` <a name="PutSchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```csharp
private void PutSchemaId(GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```csharp
private void ResetSchemaId()
```

##### `ResetSchemaVersionId` <a name="ResetSchemaVersionId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```csharp
private void ResetSchemaVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId">SchemaId</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">SchemaVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">SchemaVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">SchemaVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">SchemaVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```csharp
public GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference SchemaId { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```csharp
public GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId SchemaIdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `SchemaVersionIdInput`<sup>Optional</sup> <a name="SchemaVersionIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```csharp
public string SchemaVersionIdInput { get; }
```

- *Type:* string

---

##### `SchemaVersionNumberInput`<sup>Optional</sup> <a name="SchemaVersionNumberInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```csharp
public double SchemaVersionNumberInput { get; }
```

- *Type:* double

---

##### `SchemaVersionId`<sup>Required</sup> <a name="SchemaVersionId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```csharp
public string SchemaVersionId { get; }
```

- *Type:* string

---

##### `SchemaVersionNumber`<sup>Required</sup> <a name="SchemaVersionNumber" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```csharp
public double SchemaVersionNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```csharp
public GlueCatalogTableStorageDescriptorSchemaReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---


### GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">ResetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">ResetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegistryName` <a name="ResetRegistryName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```csharp
private void ResetRegistryName()
```

##### `ResetSchemaArn` <a name="ResetSchemaArn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```csharp
private void ResetSchemaArn()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">RegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">SchemaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">RegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">SchemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```csharp
public string RegistryNameInput { get; }
```

- *Type:* string

---

##### `SchemaArnInput`<sup>Optional</sup> <a name="SchemaArnInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```csharp
public string SchemaArnInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```csharp
public string RegistryName { get; }
```

- *Type:* string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```csharp
public string SchemaArn { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```csharp
public GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---


### GlueCatalogTableStorageDescriptorSerDeInfoOutputReference <a name="GlueCatalogTableStorageDescriptorSerDeInfoOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSerDeInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary">ResetSerializationLibrary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSerializationLibrary` <a name="ResetSerializationLibrary" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary"></a>

```csharp
private void ResetSerializationLibrary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput">SerializationLibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary">SerializationLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SerializationLibraryInput`<sup>Optional</sup> <a name="SerializationLibraryInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput"></a>

```csharp
public string SerializationLibraryInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SerializationLibrary`<sup>Required</sup> <a name="SerializationLibrary" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary"></a>

```csharp
public string SerializationLibrary { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue"></a>

```csharp
public GlueCatalogTableStorageDescriptorSerDeInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---


### GlueCatalogTableStorageDescriptorSkewedInfoOutputReference <a name="GlueCatalogTableStorageDescriptorSkewedInfoOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSkewedInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">ResetSkewedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">ResetSkewedColumnValueLocationMaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">ResetSkewedColumnValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSkewedColumnNames` <a name="ResetSkewedColumnNames" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```csharp
private void ResetSkewedColumnNames()
```

##### `ResetSkewedColumnValueLocationMaps` <a name="ResetSkewedColumnValueLocationMaps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```csharp
private void ResetSkewedColumnValueLocationMaps()
```

##### `ResetSkewedColumnValues` <a name="ResetSkewedColumnValues" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```csharp
private void ResetSkewedColumnValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">SkewedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">SkewedColumnValueLocationMapsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">SkewedColumnValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">SkewedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">SkewedColumnValueLocationMaps</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">SkewedColumnValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SkewedColumnNamesInput`<sup>Optional</sup> <a name="SkewedColumnNamesInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```csharp
public string[] SkewedColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `SkewedColumnValueLocationMapsInput`<sup>Optional</sup> <a name="SkewedColumnValueLocationMapsInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SkewedColumnValueLocationMapsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SkewedColumnValuesInput`<sup>Optional</sup> <a name="SkewedColumnValuesInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```csharp
public string[] SkewedColumnValuesInput { get; }
```

- *Type:* string[]

---

##### `SkewedColumnNames`<sup>Required</sup> <a name="SkewedColumnNames" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```csharp
public string[] SkewedColumnNames { get; }
```

- *Type:* string[]

---

##### `SkewedColumnValueLocationMaps`<sup>Required</sup> <a name="SkewedColumnValueLocationMaps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SkewedColumnValueLocationMaps { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SkewedColumnValues`<sup>Required</sup> <a name="SkewedColumnValues" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```csharp
public string[] SkewedColumnValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```csharp
public GlueCatalogTableStorageDescriptorSkewedInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---


### GlueCatalogTableStorageDescriptorSortColumnsList <a name="GlueCatalogTableStorageDescriptorSortColumnsList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSortColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get"></a>

```csharp
private GlueCatalogTableStorageDescriptorSortColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCatalogTableStorageDescriptorSortColumnsOutputReference <a name="GlueCatalogTableStorageDescriptorSortColumnsOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableStorageDescriptorSortColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.columnInput">ColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">SortOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column">Column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder">SortOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```csharp
public string ColumnInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```csharp
public double SortOrderInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column"></a>

```csharp
public string Column { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```csharp
public double SortOrder { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCatalogTableTargetTableOutputReference <a name="GlueCatalogTableTargetTableOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCatalogTableTargetTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.internalValue"></a>

```csharp
public GlueCatalogTableTargetTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---



