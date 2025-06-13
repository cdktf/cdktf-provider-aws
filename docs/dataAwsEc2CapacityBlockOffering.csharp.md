# `dataAwsEc2CapacityBlockOffering` Submodule <a name="`dataAwsEc2CapacityBlockOffering` Submodule" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2CapacityBlockOffering <a name="DataAwsEc2CapacityBlockOffering" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering aws_ec2_capacity_block_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2CapacityBlockOffering(Construct Scope, string Id, DataAwsEc2CapacityBlockOfferingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig">DataAwsEc2CapacityBlockOfferingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig">DataAwsEc2CapacityBlockOfferingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetEndDateRange">ResetEndDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetStartDateRange">ResetStartDateRange</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEndDateRange` <a name="ResetEndDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetEndDateRange"></a>

```csharp
private void ResetEndDateRange()
```

##### `ResetStartDateRange` <a name="ResetStartDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetStartDateRange"></a>

```csharp
private void ResetStartDateRange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2CapacityBlockOffering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2CapacityBlockOffering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2CapacityBlockOffering.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2CapacityBlockOffering.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2CapacityBlockOffering to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2CapacityBlockOffering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2CapacityBlockOffering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityBlockOfferingId">CapacityBlockOfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.upfrontFee">UpfrontFee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHoursInput">CapacityDurationHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRangeInput">EndDateRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRangeInput">StartDateRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHours">CapacityDurationHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRange">EndDateRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRange">StartDateRange</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `CapacityBlockOfferingId`<sup>Required</sup> <a name="CapacityBlockOfferingId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityBlockOfferingId"></a>

```csharp
public string CapacityBlockOfferingId { get; }
```

- *Type:* string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `UpfrontFee`<sup>Required</sup> <a name="UpfrontFee" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.upfrontFee"></a>

```csharp
public string UpfrontFee { get; }
```

- *Type:* string

---

##### `CapacityDurationHoursInput`<sup>Optional</sup> <a name="CapacityDurationHoursInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHoursInput"></a>

```csharp
public double CapacityDurationHoursInput { get; }
```

- *Type:* double

---

##### `EndDateRangeInput`<sup>Optional</sup> <a name="EndDateRangeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRangeInput"></a>

```csharp
public string EndDateRangeInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `StartDateRangeInput`<sup>Optional</sup> <a name="StartDateRangeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRangeInput"></a>

```csharp
public string StartDateRangeInput { get; }
```

- *Type:* string

---

##### `CapacityDurationHours`<sup>Required</sup> <a name="CapacityDurationHours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHours"></a>

```csharp
public double CapacityDurationHours { get; }
```

- *Type:* double

---

##### `EndDateRange`<sup>Required</sup> <a name="EndDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRange"></a>

```csharp
public string EndDateRange { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `StartDateRange`<sup>Required</sup> <a name="StartDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRange"></a>

```csharp
public string StartDateRange { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2CapacityBlockOfferingConfig <a name="DataAwsEc2CapacityBlockOfferingConfig" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2CapacityBlockOfferingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double CapacityDurationHours,
    double InstanceCount,
    string InstanceType,
    string EndDateRange = null,
    string StartDateRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.capacityDurationHours">CapacityDurationHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.endDateRange">EndDateRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.startDateRange">StartDateRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CapacityDurationHours`<sup>Required</sup> <a name="CapacityDurationHours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.capacityDurationHours"></a>

```csharp
public double CapacityDurationHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}.

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}.

---

##### `EndDateRange`<sup>Optional</sup> <a name="EndDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.endDateRange"></a>

```csharp
public string EndDateRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}.

---

##### `StartDateRange`<sup>Optional</sup> <a name="StartDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.startDateRange"></a>

```csharp
public string StartDateRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}.

---



