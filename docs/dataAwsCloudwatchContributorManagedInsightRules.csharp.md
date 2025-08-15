# `dataAwsCloudwatchContributorManagedInsightRules` Submodule <a name="`dataAwsCloudwatchContributorManagedInsightRules` Submodule" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudwatchContributorManagedInsightRules <a name="DataAwsCloudwatchContributorManagedInsightRules" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules aws_cloudwatch_contributor_managed_insight_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudwatchContributorManagedInsightRules(Construct Scope, string Id, DataAwsCloudwatchContributorManagedInsightRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig">DataAwsCloudwatchContributorManagedInsightRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig">DataAwsCloudwatchContributorManagedInsightRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCloudwatchContributorManagedInsightRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudwatchContributorManagedInsightRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudwatchContributorManagedInsightRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudwatchContributorManagedInsightRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudwatchContributorManagedInsightRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsCloudwatchContributorManagedInsightRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCloudwatchContributorManagedInsightRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCloudwatchContributorManagedInsightRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudwatchContributorManagedInsightRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.managedRules">ManagedRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ManagedRules`<sup>Required</sup> <a name="ManagedRules" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.managedRules"></a>

```csharp
public DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList ManagedRules { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudwatchContributorManagedInsightRulesConfig <a name="DataAwsCloudwatchContributorManagedInsightRulesConfig" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudwatchContributorManagedInsightRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ResourceArn,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#resource_arn DataAwsCloudwatchContributorManagedInsightRules#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#resource_arn DataAwsCloudwatchContributorManagedInsightRules#resource_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#region DataAwsCloudwatchContributorManagedInsightRules#region}

---

### DataAwsCloudwatchContributorManagedInsightRulesManagedRules <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRules" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudwatchContributorManagedInsightRulesManagedRules {

};
```


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.get"></a>

```csharp
private DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.ruleState">RuleState</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules">DataAwsCloudwatchContributorManagedInsightRulesManagedRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RuleState`<sup>Required</sup> <a name="RuleState" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.ruleState"></a>

```csharp
public DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList RuleState { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList</a>

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsCloudwatchContributorManagedInsightRulesManagedRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRules">DataAwsCloudwatchContributorManagedInsightRulesManagedRules</a>

---


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.get"></a>

```csharp
private DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference <a name="DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference.property.internalValue"></a>

```csharp
public DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudwatchContributorManagedInsightRules.DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState">DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState</a>

---



