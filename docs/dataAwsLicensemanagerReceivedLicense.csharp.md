# `dataAwsLicensemanagerReceivedLicense` Submodule <a name="`dataAwsLicensemanagerReceivedLicense` Submodule" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLicensemanagerReceivedLicense <a name="DataAwsLicensemanagerReceivedLicense" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/licensemanager_received_license aws_licensemanager_received_license}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicense(Construct Scope, string Id, DataAwsLicensemanagerReceivedLicenseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig">DataAwsLicensemanagerReceivedLicenseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig">DataAwsLicensemanagerReceivedLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicense resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLicensemanagerReceivedLicense.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLicensemanagerReceivedLicense.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLicensemanagerReceivedLicense.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsLicensemanagerReceivedLicense.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicense resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsLicensemanagerReceivedLicense to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsLicensemanagerReceivedLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/licensemanager_received_license#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsLicensemanagerReceivedLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.beneficiary">Beneficiary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.consumptionConfiguration">ConsumptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.entitlements">Entitlements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList">DataAwsLicensemanagerReceivedLicenseEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.homeRegion">HomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.issuer">Issuer</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList">DataAwsLicensemanagerReceivedLicenseIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseMetadata">LicenseMetadata</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList">DataAwsLicensemanagerReceivedLicenseLicenseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseName">LicenseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productName">ProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productSku">ProductSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.receivedMetadata">ReceivedMetadata</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList">DataAwsLicensemanagerReceivedLicenseReceivedMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.validity">Validity</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList">DataAwsLicensemanagerReceivedLicenseValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArnInput">LicenseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArn">LicenseArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Beneficiary`<sup>Required</sup> <a name="Beneficiary" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.beneficiary"></a>

```csharp
public string Beneficiary { get; }
```

- *Type:* string

---

##### `ConsumptionConfiguration`<sup>Required</sup> <a name="ConsumptionConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.consumptionConfiguration"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList ConsumptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.entitlements"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseEntitlementsList Entitlements { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList">DataAwsLicensemanagerReceivedLicenseEntitlementsList</a>

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.homeRegion"></a>

```csharp
public string HomeRegion { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.issuer"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseIssuerList Issuer { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList">DataAwsLicensemanagerReceivedLicenseIssuerList</a>

---

##### `LicenseMetadata`<sup>Required</sup> <a name="LicenseMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseMetadata"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseLicenseMetadataList LicenseMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList">DataAwsLicensemanagerReceivedLicenseLicenseMetadataList</a>

---

##### `LicenseName`<sup>Required</sup> <a name="LicenseName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseName"></a>

```csharp
public string LicenseName { get; }
```

- *Type:* string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productName"></a>

```csharp
public string ProductName { get; }
```

- *Type:* string

---

##### `ProductSku`<sup>Required</sup> <a name="ProductSku" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productSku"></a>

```csharp
public string ProductSku { get; }
```

- *Type:* string

---

##### `ReceivedMetadata`<sup>Required</sup> <a name="ReceivedMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.receivedMetadata"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseReceivedMetadataList ReceivedMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList">DataAwsLicensemanagerReceivedLicenseReceivedMetadataList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.validity"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseValidityList Validity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList">DataAwsLicensemanagerReceivedLicenseValidityList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseArnInput`<sup>Optional</sup> <a name="LicenseArnInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArnInput"></a>

```csharp
public string LicenseArnInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseArn`<sup>Required</sup> <a name="LicenseArn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArn"></a>

```csharp
public string LicenseArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLicensemanagerReceivedLicenseConfig <a name="DataAwsLicensemanagerReceivedLicenseConfig" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LicenseArn,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.licenseArn">LicenseArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/licensemanager_received_license#license_arn DataAwsLicensemanagerReceivedLicense#license_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/licensemanager_received_license#id DataAwsLicensemanagerReceivedLicense#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LicenseArn`<sup>Required</sup> <a name="LicenseArn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.licenseArn"></a>

```csharp
public string LicenseArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/licensemanager_received_license#license_arn DataAwsLicensemanagerReceivedLicense#license_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/licensemanager_received_license#id DataAwsLicensemanagerReceivedLicense#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration {

};
```


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration {

};
```


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration {

};
```


### DataAwsLicensemanagerReceivedLicenseEntitlements <a name="DataAwsLicensemanagerReceivedLicenseEntitlements" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseEntitlements {

};
```


### DataAwsLicensemanagerReceivedLicenseIssuer <a name="DataAwsLicensemanagerReceivedLicenseIssuer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseIssuer {

};
```


### DataAwsLicensemanagerReceivedLicenseLicenseMetadata <a name="DataAwsLicensemanagerReceivedLicenseLicenseMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseLicenseMetadata {

};
```


### DataAwsLicensemanagerReceivedLicenseReceivedMetadata <a name="DataAwsLicensemanagerReceivedLicenseReceivedMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseReceivedMetadata {

};
```


### DataAwsLicensemanagerReceivedLicenseValidity <a name="DataAwsLicensemanagerReceivedLicenseValidity" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseValidity {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.get"></a>

```csharp
private DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn">AllowEarlyCheckIn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowEarlyCheckIn`<sup>Required</sup> <a name="AllowEarlyCheckIn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn"></a>

```csharp
public IResolvable AllowEarlyCheckIn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxTimeToLiveInMinutes`<sup>Required</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```csharp
public double MaxTimeToLiveInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration</a>

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.get"></a>

```csharp
private DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration">BorrowConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration">ProvisionalConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.renewType">RenewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BorrowConfiguration`<sup>Required</sup> <a name="BorrowConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList BorrowConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList</a>

---

##### `ProvisionalConfiguration`<sup>Required</sup> <a name="ProvisionalConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList ProvisionalConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList</a>

---

##### `RenewType`<sup>Required</sup> <a name="RenewType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.renewType"></a>

```csharp
public string RenewType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration</a>

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.get"></a>

```csharp
private DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxTimeToLiveInMinutes`<sup>Required</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```csharp
public double MaxTimeToLiveInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration</a>

---


### DataAwsLicensemanagerReceivedLicenseEntitlementsList <a name="DataAwsLicensemanagerReceivedLicenseEntitlementsList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseEntitlementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.get"></a>

```csharp
private DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference <a name="DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.allowCheckIn">AllowCheckIn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.maxCount">MaxCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements">DataAwsLicensemanagerReceivedLicenseEntitlements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowCheckIn`<sup>Required</sup> <a name="AllowCheckIn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.allowCheckIn"></a>

```csharp
public IResolvable AllowCheckIn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.maxCount"></a>

```csharp
public double MaxCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.internalValue"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseEntitlements InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements">DataAwsLicensemanagerReceivedLicenseEntitlements</a>

---


### DataAwsLicensemanagerReceivedLicenseIssuerList <a name="DataAwsLicensemanagerReceivedLicenseIssuerList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseIssuerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.get"></a>

```csharp
private DataAwsLicensemanagerReceivedLicenseIssuerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseIssuerOutputReference <a name="DataAwsLicensemanagerReceivedLicenseIssuerOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseIssuerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.keyFingerprint">KeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.signKey">SignKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer">DataAwsLicensemanagerReceivedLicenseIssuer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyFingerprint`<sup>Required</sup> <a name="KeyFingerprint" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.keyFingerprint"></a>

```csharp
public string KeyFingerprint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignKey`<sup>Required</sup> <a name="SignKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.signKey"></a>

```csharp
public string SignKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.internalValue"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseIssuer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer">DataAwsLicensemanagerReceivedLicenseIssuer</a>

---


### DataAwsLicensemanagerReceivedLicenseLicenseMetadataList <a name="DataAwsLicensemanagerReceivedLicenseLicenseMetadataList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseLicenseMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.get"></a>

```csharp
private DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference <a name="DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata">DataAwsLicensemanagerReceivedLicenseLicenseMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.internalValue"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseLicenseMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata">DataAwsLicensemanagerReceivedLicenseLicenseMetadata</a>

---


### DataAwsLicensemanagerReceivedLicenseReceivedMetadataList <a name="DataAwsLicensemanagerReceivedLicenseReceivedMetadataList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseReceivedMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.get"></a>

```csharp
private DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference <a name="DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.allowedOperations">AllowedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatus">ReceivedStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatusReason">ReceivedStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata">DataAwsLicensemanagerReceivedLicenseReceivedMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOperations`<sup>Required</sup> <a name="AllowedOperations" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.allowedOperations"></a>

```csharp
public string[] AllowedOperations { get; }
```

- *Type:* string[]

---

##### `ReceivedStatus`<sup>Required</sup> <a name="ReceivedStatus" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatus"></a>

```csharp
public string ReceivedStatus { get; }
```

- *Type:* string

---

##### `ReceivedStatusReason`<sup>Required</sup> <a name="ReceivedStatusReason" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatusReason"></a>

```csharp
public string ReceivedStatusReason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.internalValue"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseReceivedMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata">DataAwsLicensemanagerReceivedLicenseReceivedMetadata</a>

---


### DataAwsLicensemanagerReceivedLicenseValidityList <a name="DataAwsLicensemanagerReceivedLicenseValidityList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseValidityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.get"></a>

```csharp
private DataAwsLicensemanagerReceivedLicenseValidityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLicensemanagerReceivedLicenseValidityOutputReference <a name="DataAwsLicensemanagerReceivedLicenseValidityOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsLicensemanagerReceivedLicenseValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.begin">Begin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity">DataAwsLicensemanagerReceivedLicenseValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Begin`<sup>Required</sup> <a name="Begin" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.begin"></a>

```csharp
public string Begin { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.internalValue"></a>

```csharp
public DataAwsLicensemanagerReceivedLicenseValidity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity">DataAwsLicensemanagerReceivedLicenseValidity</a>

---



