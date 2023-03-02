# `dataAwsGlueDataCatalogEncryptionSettings` Submodule <a name="`dataAwsGlueDataCatalogEncryptionSettings` Submodule" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlueDataCatalogEncryptionSettings <a name="DataAwsGlueDataCatalogEncryptionSettings" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings aws_glue_data_catalog_encryption_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettings(Construct Scope, string Id, DataAwsGlueDataCatalogEncryptionSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig">DataAwsGlueDataCatalogEncryptionSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig">DataAwsGlueDataCatalogEncryptionSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsGlueDataCatalogEncryptionSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsGlueDataCatalogEncryptionSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsGlueDataCatalogEncryptionSettings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.dataCatalogEncryptionSettings">DataCatalogEncryptionSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DataCatalogEncryptionSettings`<sup>Required</sup> <a name="DataCatalogEncryptionSettings" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.dataCatalogEncryptionSettings"></a>

```csharp
public DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList DataCatalogEncryptionSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlueDataCatalogEncryptionSettingsConfig <a name="DataAwsGlueDataCatalogEncryptionSettingsConfig" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettingsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CatalogId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings#catalog_id DataAwsGlueDataCatalogEncryptionSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings#id DataAwsGlueDataCatalogEncryptionSettings#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings#catalog_id DataAwsGlueDataCatalogEncryptionSettings#catalog_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings#id DataAwsGlueDataCatalogEncryptionSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings <a name="DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {

};
```


### DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption <a name="DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {

};
```


### DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest <a name="DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList <a name="DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.get"></a>

```csharp
private DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference <a name="DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.awsKmsKeyId">AwsKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.returnConnectionPasswordEncrypted">ReturnConnectionPasswordEncrypted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsKmsKeyId`<sup>Required</sup> <a name="AwsKmsKeyId" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.awsKmsKeyId"></a>

```csharp
public string AwsKmsKeyId { get; }
```

- *Type:* string

---

##### `ReturnConnectionPasswordEncrypted`<sup>Required</sup> <a name="ReturnConnectionPasswordEncrypted" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.returnConnectionPasswordEncrypted"></a>

```csharp
public IResolvable ReturnConnectionPasswordEncrypted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a>

---


### DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList <a name="DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.get"></a>

```csharp
private DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference <a name="DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionMode">CatalogEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.sseAwsKmsKeyId">SseAwsKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogEncryptionMode`<sup>Required</sup> <a name="CatalogEncryptionMode" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionMode"></a>

```csharp
public string CatalogEncryptionMode { get; }
```

- *Type:* string

---

##### `SseAwsKmsKeyId`<sup>Required</sup> <a name="SseAwsKmsKeyId" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.sseAwsKmsKeyId"></a>

```csharp
public string SseAwsKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a>

---


### DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList <a name="DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.get"></a>

```csharp
private DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference <a name="DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.connectionPasswordEncryption">ConnectionPasswordEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.encryptionAtRest">EncryptionAtRest</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionPasswordEncryption`<sup>Required</sup> <a name="ConnectionPasswordEncryption" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.connectionPasswordEncryption"></a>

```csharp
public DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList ConnectionPasswordEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionList</a>

---

##### `EncryptionAtRest`<sup>Required</sup> <a name="EncryptionAtRest" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.encryptionAtRest"></a>

```csharp
public DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList EncryptionAtRest { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueDataCatalogEncryptionSettings.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a>

---



