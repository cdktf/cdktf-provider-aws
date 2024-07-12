# `dataAwsQuicksightDataSet` Submodule <a name="`dataAwsQuicksightDataSet` Submodule" id="@cdktf/provider-aws.dataAwsQuicksightDataSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsQuicksightDataSet <a name="DataAwsQuicksightDataSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set aws_quicksight_data_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSet(Construct Scope, string Id, DataAwsQuicksightDataSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig">DataAwsQuicksightDataSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig">DataAwsQuicksightDataSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.putColumnLevelPermissionRules">PutColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetColumnLevelPermissionRules">ResetColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutColumnLevelPermissionRules` <a name="PutColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.putColumnLevelPermissionRules"></a>

```csharp
private void PutColumnLevelPermissionRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.putColumnLevelPermissionRules.parameter.value"></a>

- *Type:* object

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetColumnLevelPermissionRules` <a name="ResetColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetColumnLevelPermissionRules"></a>

```csharp
private void ResetColumnLevelPermissionRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsQuicksightDataSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsQuicksightDataSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsQuicksightDataSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsQuicksightDataSet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsQuicksightDataSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsQuicksightDataSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsQuicksightDataSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsQuicksightDataSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsQuicksightDataSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnGroups">ColumnGroups</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList">DataAwsQuicksightDataSetColumnGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRules">ColumnLevelPermissionRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList">DataAwsQuicksightDataSetColumnLevelPermissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetUsageConfiguration">DataSetUsageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList">DataAwsQuicksightDataSetDataSetUsageConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fieldFolders">FieldFolders</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList">DataAwsQuicksightDataSetFieldFoldersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.importMode">ImportMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.logicalTableMap">LogicalTableMap</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList">DataAwsQuicksightDataSetLogicalTableMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList">DataAwsQuicksightDataSetPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.physicalTableMap">PhysicalTableMap</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList">DataAwsQuicksightDataSetPhysicalTableMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionDataSet">RowLevelPermissionDataSet</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList">DataAwsQuicksightDataSetRowLevelPermissionDataSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionTagConfiguration">RowLevelPermissionTagConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRulesInput">ColumnLevelPermissionRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetIdInput">DataSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetId">DataSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ColumnGroups`<sup>Required</sup> <a name="ColumnGroups" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnGroups"></a>

```csharp
public DataAwsQuicksightDataSetColumnGroupsList ColumnGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList">DataAwsQuicksightDataSetColumnGroupsList</a>

---

##### `ColumnLevelPermissionRules`<sup>Required</sup> <a name="ColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRules"></a>

```csharp
public DataAwsQuicksightDataSetColumnLevelPermissionRulesList ColumnLevelPermissionRules { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList">DataAwsQuicksightDataSetColumnLevelPermissionRulesList</a>

---

##### `DataSetUsageConfiguration`<sup>Required</sup> <a name="DataSetUsageConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetUsageConfiguration"></a>

```csharp
public DataAwsQuicksightDataSetDataSetUsageConfigurationList DataSetUsageConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList">DataAwsQuicksightDataSetDataSetUsageConfigurationList</a>

---

##### `FieldFolders`<sup>Required</sup> <a name="FieldFolders" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fieldFolders"></a>

```csharp
public DataAwsQuicksightDataSetFieldFoldersList FieldFolders { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList">DataAwsQuicksightDataSetFieldFoldersList</a>

---

##### `ImportMode`<sup>Required</sup> <a name="ImportMode" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.importMode"></a>

```csharp
public string ImportMode { get; }
```

- *Type:* string

---

##### `LogicalTableMap`<sup>Required</sup> <a name="LogicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.logicalTableMap"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapList LogicalTableMap { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList">DataAwsQuicksightDataSetLogicalTableMapList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.permissions"></a>

```csharp
public DataAwsQuicksightDataSetPermissionsList Permissions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList">DataAwsQuicksightDataSetPermissionsList</a>

---

##### `PhysicalTableMap`<sup>Required</sup> <a name="PhysicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.physicalTableMap"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapList PhysicalTableMap { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList">DataAwsQuicksightDataSetPhysicalTableMapList</a>

---

##### `RowLevelPermissionDataSet`<sup>Required</sup> <a name="RowLevelPermissionDataSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionDataSet"></a>

```csharp
public DataAwsQuicksightDataSetRowLevelPermissionDataSetList RowLevelPermissionDataSet { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList">DataAwsQuicksightDataSetRowLevelPermissionDataSetList</a>

---

##### `RowLevelPermissionTagConfiguration`<sup>Required</sup> <a name="RowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionTagConfiguration"></a>

```csharp
public DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList RowLevelPermissionTagConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `ColumnLevelPermissionRulesInput`<sup>Optional</sup> <a name="ColumnLevelPermissionRulesInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRulesInput"></a>

```csharp
public object ColumnLevelPermissionRulesInput { get; }
```

- *Type:* object

---

##### `DataSetIdInput`<sup>Optional</sup> <a name="DataSetIdInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetIdInput"></a>

```csharp
public string DataSetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetId"></a>

```csharp
public string DataSetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsQuicksightDataSetColumnGroups <a name="DataAwsQuicksightDataSetColumnGroups" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetColumnGroups {

};
```


### DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup <a name="DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup {

};
```


### DataAwsQuicksightDataSetColumnLevelPermissionRules <a name="DataAwsQuicksightDataSetColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetColumnLevelPermissionRules {

};
```


### DataAwsQuicksightDataSetConfig <a name="DataAwsQuicksightDataSetConfig" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataSetId,
    string AwsAccountId = null,
    object ColumnLevelPermissionRules = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dataSetId">DataSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#data_set_id DataAwsQuicksightDataSet#data_set_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#aws_account_id DataAwsQuicksightDataSet#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.columnLevelPermissionRules">ColumnLevelPermissionRules</a></code> | <code>object</code> | column_level_permission_rules block. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#id DataAwsQuicksightDataSet#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#tags DataAwsQuicksightDataSet#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#tags_all DataAwsQuicksightDataSet#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dataSetId"></a>

```csharp
public string DataSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#data_set_id DataAwsQuicksightDataSet#data_set_id}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#aws_account_id DataAwsQuicksightDataSet#aws_account_id}.

---

##### `ColumnLevelPermissionRules`<sup>Optional</sup> <a name="ColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.columnLevelPermissionRules"></a>

```csharp
public object ColumnLevelPermissionRules { get; set; }
```

- *Type:* object

column_level_permission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#column_level_permission_rules DataAwsQuicksightDataSet#column_level_permission_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#id DataAwsQuicksightDataSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#tags DataAwsQuicksightDataSet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/quicksight_data_set#tags_all DataAwsQuicksightDataSet#tags_all}.

---

### DataAwsQuicksightDataSetDataSetUsageConfiguration <a name="DataAwsQuicksightDataSetDataSetUsageConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetDataSetUsageConfiguration {

};
```


### DataAwsQuicksightDataSetFieldFolders <a name="DataAwsQuicksightDataSetFieldFolders" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetFieldFolders {

};
```


### DataAwsQuicksightDataSetLogicalTableMap <a name="DataAwsQuicksightDataSetLogicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMap {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransforms <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransforms" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransforms {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {

};
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation {

};
```


### DataAwsQuicksightDataSetLogicalTableMapSource <a name="DataAwsQuicksightDataSetLogicalTableMapSource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSource {

};
```


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction {

};
```


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {

};
```


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {

};
```


### DataAwsQuicksightDataSetPermissions <a name="DataAwsQuicksightDataSetPermissions" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPermissions {

};
```


### DataAwsQuicksightDataSetPhysicalTableMap <a name="DataAwsQuicksightDataSetPhysicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMap {

};
```


### DataAwsQuicksightDataSetPhysicalTableMapCustomSql <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSql" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapCustomSql {

};
```


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns {

};
```


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTable <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTable" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapRelationalTable {

};
```


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns {

};
```


### DataAwsQuicksightDataSetPhysicalTableMapS3Source <a name="DataAwsQuicksightDataSetPhysicalTableMapS3Source" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapS3Source {

};
```


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns {

};
```


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings {

};
```


### DataAwsQuicksightDataSetRowLevelPermissionDataSet <a name="DataAwsQuicksightDataSetRowLevelPermissionDataSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetRowLevelPermissionDataSet {

};
```


### DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration {

};
```


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList <a name="DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.get"></a>

```csharp
private DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference <a name="DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---


### DataAwsQuicksightDataSetColumnGroupsList <a name="DataAwsQuicksightDataSetColumnGroupsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetColumnGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.get"></a>

```csharp
private DataAwsQuicksightDataSetColumnGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetColumnGroupsOutputReference <a name="DataAwsQuicksightDataSetColumnGroupsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetColumnGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup">GeoSpatialColumnGroup</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups">DataAwsQuicksightDataSetColumnGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GeoSpatialColumnGroup`<sup>Required</sup> <a name="GeoSpatialColumnGroup" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup"></a>

```csharp
public DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList GeoSpatialColumnGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetColumnGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups">DataAwsQuicksightDataSetColumnGroups</a>

---


### DataAwsQuicksightDataSetColumnLevelPermissionRulesList <a name="DataAwsQuicksightDataSetColumnLevelPermissionRulesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetColumnLevelPermissionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.get"></a>

```csharp
private DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference <a name="DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsQuicksightDataSetDataSetUsageConfigurationList <a name="DataAwsQuicksightDataSetDataSetUsageConfigurationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetDataSetUsageConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.get"></a>

```csharp
private DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference <a name="DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource">DisableUseAsDirectQuerySource</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource">DisableUseAsImportedSource</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration">DataAwsQuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableUseAsDirectQuerySource`<sup>Required</sup> <a name="DisableUseAsDirectQuerySource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource"></a>

```csharp
public IResolvable DisableUseAsDirectQuerySource { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisableUseAsImportedSource`<sup>Required</sup> <a name="DisableUseAsImportedSource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource"></a>

```csharp
public IResolvable DisableUseAsImportedSource { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetDataSetUsageConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration">DataAwsQuicksightDataSetDataSetUsageConfiguration</a>

---


### DataAwsQuicksightDataSetFieldFoldersList <a name="DataAwsQuicksightDataSetFieldFoldersList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetFieldFoldersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.get"></a>

```csharp
private DataAwsQuicksightDataSetFieldFoldersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetFieldFoldersOutputReference <a name="DataAwsQuicksightDataSetFieldFoldersOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetFieldFoldersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersId">FieldFoldersId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders">DataAwsQuicksightDataSetFieldFolders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FieldFoldersId`<sup>Required</sup> <a name="FieldFoldersId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersId"></a>

```csharp
public string FieldFoldersId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetFieldFolders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders">DataAwsQuicksightDataSetFieldFolders</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType">NewColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `NewColumnType`<sup>Required</sup> <a name="NewColumnType" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType"></a>

```csharp
public string NewColumnType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId">ColumnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnId`<sup>Required</sup> <a name="ColumnId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId"></a>

```csharp
public string ColumnId { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression">ConditionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression"></a>

```csharp
public string ConditionExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation">CastColumnTypeOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation">CreateColumnsOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation">FilterOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation">ProjectOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation">RenameColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation">TagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperation">UntagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms">DataAwsQuicksightDataSetLogicalTableMapDataTransforms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CastColumnTypeOperation`<sup>Required</sup> <a name="CastColumnTypeOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList CastColumnTypeOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList</a>

---

##### `CreateColumnsOperation`<sup>Required</sup> <a name="CreateColumnsOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList CreateColumnsOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList</a>

---

##### `FilterOperation`<sup>Required</sup> <a name="FilterOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList FilterOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList</a>

---

##### `ProjectOperation`<sup>Required</sup> <a name="ProjectOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList ProjectOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList</a>

---

##### `RenameColumnOperation`<sup>Required</sup> <a name="RenameColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList RenameColumnOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList</a>

---

##### `TagColumnOperation`<sup>Required</sup> <a name="TagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList TagColumnOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList</a>

---

##### `UntagColumnOperation`<sup>Required</sup> <a name="UntagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperation"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList UntagColumnOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransforms InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms">DataAwsQuicksightDataSetLogicalTableMapDataTransforms</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns">ProjectedColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectedColumns`<sup>Required</sup> <a name="ProjectedColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns"></a>

```csharp
public string[] ProjectedColumns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName">NewColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `NewColumnName`<sup>Required</sup> <a name="NewColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName"></a>

```csharp
public string NewColumnName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription">ColumnDescription</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole">ColumnGeographicRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnDescription`<sup>Required</sup> <a name="ColumnDescription" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList ColumnDescription { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList</a>

---

##### `ColumnGeographicRole`<sup>Required</sup> <a name="ColumnGeographicRole" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole"></a>

```csharp
public string ColumnGeographicRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNames">TagNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `TagNames`<sup>Required</sup> <a name="TagNames" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNames"></a>

```csharp
public string[] TagNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapList <a name="DataAwsQuicksightDataSetLogicalTableMapList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms">DataTransforms</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapId">LogicalTableMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList">DataAwsQuicksightDataSetLogicalTableMapSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap">DataAwsQuicksightDataSetLogicalTableMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `DataTransforms`<sup>Required</sup> <a name="DataTransforms" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapDataTransformsList DataTransforms { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsList</a>

---

##### `LogicalTableMapId`<sup>Required</sup> <a name="LogicalTableMapId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapId"></a>

```csharp
public string LogicalTableMapId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.source"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapSourceList Source { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList">DataAwsQuicksightDataSetLogicalTableMapSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap">DataAwsQuicksightDataSetLogicalTableMap</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```csharp
public IResolvable UniqueKey { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties">LeftJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand">LeftOperand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause">OnClause</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties">RightJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand">RightOperand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeftJoinKeyProperties`<sup>Required</sup> <a name="LeftJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList LeftJoinKeyProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList</a>

---

##### `LeftOperand`<sup>Required</sup> <a name="LeftOperand" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand"></a>

```csharp
public string LeftOperand { get; }
```

- *Type:* string

---

##### `OnClause`<sup>Required</sup> <a name="OnClause" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause"></a>

```csharp
public string OnClause { get; }
```

- *Type:* string

---

##### `RightJoinKeyProperties`<sup>Required</sup> <a name="RightJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList RightJoinKeyProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList</a>

---

##### `RightOperand`<sup>Required</sup> <a name="RightOperand" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand"></a>

```csharp
public string RightOperand { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```csharp
public IResolvable UniqueKey { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.get"></a>

```csharp
private DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction">JoinInstruction</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId">PhysicalTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource">DataAwsQuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; }
```

- *Type:* string

---

##### `JoinInstruction`<sup>Required</sup> <a name="JoinInstruction" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList JoinInstruction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList</a>

---

##### `PhysicalTableId`<sup>Required</sup> <a name="PhysicalTableId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId"></a>

```csharp
public string PhysicalTableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetLogicalTableMapSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource">DataAwsQuicksightDataSetLogicalTableMapSource</a>

---


### DataAwsQuicksightDataSetPermissionsList <a name="DataAwsQuicksightDataSetPermissionsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.get"></a>

```csharp
private DataAwsQuicksightDataSetPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetPermissionsOutputReference <a name="DataAwsQuicksightDataSetPermissionsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions">DataAwsQuicksightDataSetPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetPermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions">DataAwsQuicksightDataSetPermissions</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get"></a>

```csharp
private DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.get"></a>

```csharp
private DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery">SqlQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql">DataAwsQuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a>

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery"></a>

```csharp
public string SqlQuery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapCustomSql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql">DataAwsQuicksightDataSetPhysicalTableMapCustomSql</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapList <a name="DataAwsQuicksightDataSetPhysicalTableMapList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.get"></a>

```csharp
private DataAwsQuicksightDataSetPhysicalTableMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.customSql">CustomSql</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapId">PhysicalTableMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable">RelationalTable</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.s3Source">S3Source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap">DataAwsQuicksightDataSetPhysicalTableMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomSql`<sup>Required</sup> <a name="CustomSql" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.customSql"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList CustomSql { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList</a>

---

##### `PhysicalTableMapId`<sup>Required</sup> <a name="PhysicalTableMapId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapId"></a>

```csharp
public string PhysicalTableMapId { get; }
```

- *Type:* string

---

##### `RelationalTable`<sup>Required</sup> <a name="RelationalTable" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList RelationalTable { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList</a>

---

##### `S3Source`<sup>Required</sup> <a name="S3Source" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.s3Source"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapS3SourceList S3Source { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap">DataAwsQuicksightDataSetPhysicalTableMap</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get"></a>

```csharp
private DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.get"></a>

```csharp
private DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns">InputColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable">DataAwsQuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; }
```

- *Type:* string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList InputColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapRelationalTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable">DataAwsQuicksightDataSetPhysicalTableMapRelationalTable</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get"></a>

```csharp
private DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceList <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapS3SourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.get"></a>

```csharp
private DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns">InputColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings">UploadSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source">DataAwsQuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; }
```

- *Type:* string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList InputColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a>

---

##### `UploadSettings`<sup>Required</sup> <a name="UploadSettings" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList UploadSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapS3Source InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source">DataAwsQuicksightDataSetPhysicalTableMapS3Source</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.get"></a>

```csharp
private DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader">ContainsHeader</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow">StartFromRow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier">TextQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainsHeader`<sup>Required</sup> <a name="ContainsHeader" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader"></a>

```csharp
public IResolvable ContainsHeader { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `StartFromRow`<sup>Required</sup> <a name="StartFromRow" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow"></a>

```csharp
public double StartFromRow { get; }
```

- *Type:* double

---

##### `TextQualifier`<sup>Required</sup> <a name="TextQualifier" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier"></a>

```csharp
public string TextQualifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---


### DataAwsQuicksightDataSetRowLevelPermissionDataSetList <a name="DataAwsQuicksightDataSetRowLevelPermissionDataSetList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetRowLevelPermissionDataSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.get"></a>

```csharp
private DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference <a name="DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion">FormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy">PermissionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet">DataAwsQuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FormatVersion`<sup>Required</sup> <a name="FormatVersion" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion"></a>

```csharp
public string FormatVersion { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PermissionPolicy`<sup>Required</sup> <a name="PermissionPolicy" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy"></a>

```csharp
public string PermissionPolicy { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetRowLevelPermissionDataSet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet">DataAwsQuicksightDataSetRowLevelPermissionDataSet</a>

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.get"></a>

```csharp
private DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRules">TagRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration">DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TagRules`<sup>Required</sup> <a name="TagRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRules"></a>

```csharp
public DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList TagRules { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration">DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration</a>

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get"></a>

```csharp
private DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValue">MatchAllValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiter">TagMultiValueDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `MatchAllValue`<sup>Required</sup> <a name="MatchAllValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValue"></a>

```csharp
public string MatchAllValue { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagMultiValueDelimiter`<sup>Required</sup> <a name="TagMultiValueDelimiter" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiter"></a>

```csharp
public string TagMultiValueDelimiter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules</a>

---



