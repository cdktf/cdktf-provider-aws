# `dataAwsRdsEngineVersion` Submodule <a name="`dataAwsRdsEngineVersion` Submodule" id="@cdktf/provider-aws.dataAwsRdsEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsEngineVersion <a name="DataAwsRdsEngineVersion" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version aws_rds_engine_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRdsEngineVersion(Construct Scope, string Id, DataAwsRdsEngineVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig">DataAwsRdsEngineVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig">DataAwsRdsEngineVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetDefaultOnly">ResetDefaultOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetParameterGroupFamily">ResetParameterGroupFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetPreferredVersions">ResetPreferredVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDefaultOnly` <a name="ResetDefaultOnly" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetDefaultOnly"></a>

```csharp
private void ResetDefaultOnly()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetIncludeAll"></a>

```csharp
private void ResetIncludeAll()
```

##### `ResetParameterGroupFamily` <a name="ResetParameterGroupFamily" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetParameterGroupFamily"></a>

```csharp
private void ResetParameterGroupFamily()
```

##### `ResetPreferredVersions` <a name="ResetPreferredVersions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetPreferredVersions"></a>

```csharp
private void ResetPreferredVersions()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRdsEngineVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRdsEngineVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRdsEngineVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultCharacterSet">DefaultCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineDescription">EngineDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.exportableLogTypes">ExportableLogTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList">DataAwsRdsEngineVersionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedCharacterSets">SupportedCharacterSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedFeatureNames">SupportedFeatureNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedModes">SupportedModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedTimezones">SupportedTimezones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsGlobalDatabases">SupportsGlobalDatabases</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsLogExportsToCloudwatch">SupportsLogExportsToCloudwatch</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsParallelQuery">SupportsParallelQuery</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsReadReplica">SupportsReadReplica</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.validUpgradeTargets">ValidUpgradeTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionDescription">VersionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnlyInput">DefaultOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAllInput">IncludeAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamilyInput">ParameterGroupFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersionsInput">PreferredVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnly">DefaultOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAll">IncludeAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamily">ParameterGroupFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersions">PreferredVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DefaultCharacterSet`<sup>Required</sup> <a name="DefaultCharacterSet" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultCharacterSet"></a>

```csharp
public string DefaultCharacterSet { get; }
```

- *Type:* string

---

##### `EngineDescription`<sup>Required</sup> <a name="EngineDescription" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineDescription"></a>

```csharp
public string EngineDescription { get; }
```

- *Type:* string

---

##### `ExportableLogTypes`<sup>Required</sup> <a name="ExportableLogTypes" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.exportableLogTypes"></a>

```csharp
public string[] ExportableLogTypes { get; }
```

- *Type:* string[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filter"></a>

```csharp
public DataAwsRdsEngineVersionFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList">DataAwsRdsEngineVersionFilterList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SupportedCharacterSets`<sup>Required</sup> <a name="SupportedCharacterSets" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedCharacterSets"></a>

```csharp
public string[] SupportedCharacterSets { get; }
```

- *Type:* string[]

---

##### `SupportedFeatureNames`<sup>Required</sup> <a name="SupportedFeatureNames" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedFeatureNames"></a>

```csharp
public string[] SupportedFeatureNames { get; }
```

- *Type:* string[]

---

##### `SupportedModes`<sup>Required</sup> <a name="SupportedModes" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedModes"></a>

```csharp
public string[] SupportedModes { get; }
```

- *Type:* string[]

---

##### `SupportedTimezones`<sup>Required</sup> <a name="SupportedTimezones" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedTimezones"></a>

```csharp
public string[] SupportedTimezones { get; }
```

- *Type:* string[]

---

##### `SupportsGlobalDatabases`<sup>Required</sup> <a name="SupportsGlobalDatabases" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsGlobalDatabases"></a>

```csharp
public IResolvable SupportsGlobalDatabases { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SupportsLogExportsToCloudwatch`<sup>Required</sup> <a name="SupportsLogExportsToCloudwatch" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsLogExportsToCloudwatch"></a>

```csharp
public IResolvable SupportsLogExportsToCloudwatch { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SupportsParallelQuery`<sup>Required</sup> <a name="SupportsParallelQuery" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsParallelQuery"></a>

```csharp
public IResolvable SupportsParallelQuery { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SupportsReadReplica`<sup>Required</sup> <a name="SupportsReadReplica" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsReadReplica"></a>

```csharp
public IResolvable SupportsReadReplica { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ValidUpgradeTargets`<sup>Required</sup> <a name="ValidUpgradeTargets" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.validUpgradeTargets"></a>

```csharp
public string[] ValidUpgradeTargets { get; }
```

- *Type:* string[]

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionDescription"></a>

```csharp
public string VersionDescription { get; }
```

- *Type:* string

---

##### `DefaultOnlyInput`<sup>Optional</sup> <a name="DefaultOnlyInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnlyInput"></a>

```csharp
public object DefaultOnlyInput { get; }
```

- *Type:* object

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAllInput"></a>

```csharp
public object IncludeAllInput { get; }
```

- *Type:* object

---

##### `ParameterGroupFamilyInput`<sup>Optional</sup> <a name="ParameterGroupFamilyInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamilyInput"></a>

```csharp
public string ParameterGroupFamilyInput { get; }
```

- *Type:* string

---

##### `PreferredVersionsInput`<sup>Optional</sup> <a name="PreferredVersionsInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersionsInput"></a>

```csharp
public string[] PreferredVersionsInput { get; }
```

- *Type:* string[]

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `DefaultOnly`<sup>Required</sup> <a name="DefaultOnly" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnly"></a>

```csharp
public object DefaultOnly { get; }
```

- *Type:* object

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAll"></a>

```csharp
public object IncludeAll { get; }
```

- *Type:* object

---

##### `ParameterGroupFamily`<sup>Required</sup> <a name="ParameterGroupFamily" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamily"></a>

```csharp
public string ParameterGroupFamily { get; }
```

- *Type:* string

---

##### `PreferredVersions`<sup>Required</sup> <a name="PreferredVersions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersions"></a>

```csharp
public string[] PreferredVersions { get; }
```

- *Type:* string[]

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsEngineVersionConfig <a name="DataAwsRdsEngineVersionConfig" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRdsEngineVersionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Engine,
    object DefaultOnly = null,
    object Filter = null,
    string Id = null,
    object IncludeAll = null,
    string ParameterGroupFamily = null,
    string[] PreferredVersions = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#engine DataAwsRdsEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.defaultOnly">DefaultOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#id DataAwsRdsEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.includeAll">IncludeAll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.parameterGroupFamily">ParameterGroupFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.preferredVersions">PreferredVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#version DataAwsRdsEngineVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#engine DataAwsRdsEngineVersion#engine}.

---

##### `DefaultOnly`<sup>Optional</sup> <a name="DefaultOnly" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.defaultOnly"></a>

```csharp
public object DefaultOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#filter DataAwsRdsEngineVersion#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#id DataAwsRdsEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.includeAll"></a>

```csharp
public object IncludeAll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}.

---

##### `ParameterGroupFamily`<sup>Optional</sup> <a name="ParameterGroupFamily" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.parameterGroupFamily"></a>

```csharp
public string ParameterGroupFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}.

---

##### `PreferredVersions`<sup>Optional</sup> <a name="PreferredVersions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.preferredVersions"></a>

```csharp
public string[] PreferredVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#version DataAwsRdsEngineVersion#version}.

---

### DataAwsRdsEngineVersionFilter <a name="DataAwsRdsEngineVersionFilter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRdsEngineVersionFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#name DataAwsRdsEngineVersion#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#values DataAwsRdsEngineVersion#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#name DataAwsRdsEngineVersion#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#values DataAwsRdsEngineVersion#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsEngineVersionFilterList <a name="DataAwsRdsEngineVersionFilterList" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRdsEngineVersionFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.get"></a>

```csharp
private DataAwsRdsEngineVersionFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsRdsEngineVersionFilterOutputReference <a name="DataAwsRdsEngineVersionFilterOutputReference" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRdsEngineVersionFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



