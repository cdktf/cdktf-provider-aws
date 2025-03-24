# `dataAwsLicensemanagerReceivedLicenses` Submodule <a name="`dataAwsLicensemanagerReceivedLicenses` Submodule" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLicensemanagerReceivedLicenses <a name="DataAwsLicensemanagerReceivedLicenses" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/licensemanager_received_licenses aws_licensemanager_received_licenses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenses(Construct Scope, string Id, DataAwsLicensemanagerReceivedLicensesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig">DataAwsLicensemanagerReceivedLicensesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig">DataAwsLicensemanagerReceivedLicensesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicenses resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLicensemanagerReceivedLicenses.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLicensemanagerReceivedLicenses.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLicensemanagerReceivedLicenses.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLicensemanagerReceivedLicenses.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicenses resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsLicensemanagerReceivedLicenses to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsLicensemanagerReceivedLicenses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/licensemanager_received_licenses#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsLicensemanagerReceivedLicenses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.arns">Arns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList">DataAwsLicensemanagerReceivedLicensesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arns`<sup>Required</sup> <a name="Arns" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.arns"></a>

```csharp
public string[] Arns { get; }
```

- *Type:* string[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filter"></a>

```csharp
public DataAwsLicensemanagerReceivedLicensesFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList">DataAwsLicensemanagerReceivedLicensesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLicensemanagerReceivedLicensesConfig <a name="DataAwsLicensemanagerReceivedLicensesConfig" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicensesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/licensemanager_received_licenses#id DataAwsLicensemanagerReceivedLicenses#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/licensemanager_received_licenses#filter DataAwsLicensemanagerReceivedLicenses#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/licensemanager_received_licenses#id DataAwsLicensemanagerReceivedLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLicensemanagerReceivedLicensesFilter <a name="DataAwsLicensemanagerReceivedLicensesFilter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicensesFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/licensemanager_received_licenses#name DataAwsLicensemanagerReceivedLicenses#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/licensemanager_received_licenses#values DataAwsLicensemanagerReceivedLicenses#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/licensemanager_received_licenses#name DataAwsLicensemanagerReceivedLicenses#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/licensemanager_received_licenses#values DataAwsLicensemanagerReceivedLicenses#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLicensemanagerReceivedLicensesFilterList <a name="DataAwsLicensemanagerReceivedLicensesFilterList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicensesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.get"></a>

```csharp
private DataAwsLicensemanagerReceivedLicensesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsLicensemanagerReceivedLicensesFilterOutputReference <a name="DataAwsLicensemanagerReceivedLicensesFilterOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicensesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



