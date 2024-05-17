# `dataAwsSesv2ConfigurationSet` Submodule <a name="`dataAwsSesv2ConfigurationSet` Submodule" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2ConfigurationSet <a name="DataAwsSesv2ConfigurationSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/sesv2_configuration_set aws_sesv2_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSet(Construct Scope, string Id, DataAwsSesv2ConfigurationSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig">DataAwsSesv2ConfigurationSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig">DataAwsSesv2ConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSesv2ConfigurationSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2ConfigurationSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2ConfigurationSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2ConfigurationSet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSesv2ConfigurationSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsSesv2ConfigurationSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSesv2ConfigurationSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSesv2ConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/sesv2_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSesv2ConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.deliveryOptions">DeliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList">DataAwsSesv2ConfigurationSetDeliveryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.reputationOptions">ReputationOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList">DataAwsSesv2ConfigurationSetReputationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.sendingOptions">SendingOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList">DataAwsSesv2ConfigurationSetSendingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.suppressionOptions">SuppressionOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList">DataAwsSesv2ConfigurationSetSuppressionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.trackingOptions">TrackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList">DataAwsSesv2ConfigurationSetTrackingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.vdmOptions">VdmOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeliveryOptions`<sup>Required</sup> <a name="DeliveryOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.deliveryOptions"></a>

```csharp
public DataAwsSesv2ConfigurationSetDeliveryOptionsList DeliveryOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList">DataAwsSesv2ConfigurationSetDeliveryOptionsList</a>

---

##### `ReputationOptions`<sup>Required</sup> <a name="ReputationOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.reputationOptions"></a>

```csharp
public DataAwsSesv2ConfigurationSetReputationOptionsList ReputationOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList">DataAwsSesv2ConfigurationSetReputationOptionsList</a>

---

##### `SendingOptions`<sup>Required</sup> <a name="SendingOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.sendingOptions"></a>

```csharp
public DataAwsSesv2ConfigurationSetSendingOptionsList SendingOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList">DataAwsSesv2ConfigurationSetSendingOptionsList</a>

---

##### `SuppressionOptions`<sup>Required</sup> <a name="SuppressionOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.suppressionOptions"></a>

```csharp
public DataAwsSesv2ConfigurationSetSuppressionOptionsList SuppressionOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList">DataAwsSesv2ConfigurationSetSuppressionOptionsList</a>

---

##### `TrackingOptions`<sup>Required</sup> <a name="TrackingOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.trackingOptions"></a>

```csharp
public DataAwsSesv2ConfigurationSetTrackingOptionsList TrackingOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList">DataAwsSesv2ConfigurationSetTrackingOptionsList</a>

---

##### `VdmOptions`<sup>Required</sup> <a name="VdmOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.vdmOptions"></a>

```csharp
public DataAwsSesv2ConfigurationSetVdmOptionsList VdmOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsList</a>

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetNameInput"></a>

```csharp
public string ConfigurationSetNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2ConfigurationSetConfig <a name="DataAwsSesv2ConfigurationSetConfig" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConfigurationSetName,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/sesv2_configuration_set#configuration_set_name DataAwsSesv2ConfigurationSet#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/sesv2_configuration_set#id DataAwsSesv2ConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/sesv2_configuration_set#tags DataAwsSesv2ConfigurationSet#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/sesv2_configuration_set#configuration_set_name DataAwsSesv2ConfigurationSet#configuration_set_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/sesv2_configuration_set#id DataAwsSesv2ConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/sesv2_configuration_set#tags DataAwsSesv2ConfigurationSet#tags}.

---

### DataAwsSesv2ConfigurationSetDeliveryOptions <a name="DataAwsSesv2ConfigurationSetDeliveryOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetDeliveryOptions {

};
```


### DataAwsSesv2ConfigurationSetReputationOptions <a name="DataAwsSesv2ConfigurationSetReputationOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetReputationOptions {

};
```


### DataAwsSesv2ConfigurationSetSendingOptions <a name="DataAwsSesv2ConfigurationSetSendingOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetSendingOptions {

};
```


### DataAwsSesv2ConfigurationSetSuppressionOptions <a name="DataAwsSesv2ConfigurationSetSuppressionOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetSuppressionOptions {

};
```


### DataAwsSesv2ConfigurationSetTrackingOptions <a name="DataAwsSesv2ConfigurationSetTrackingOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetTrackingOptions {

};
```


### DataAwsSesv2ConfigurationSetVdmOptions <a name="DataAwsSesv2ConfigurationSetVdmOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetVdmOptions {

};
```


### DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions <a name="DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions {

};
```


### DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions <a name="DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSesv2ConfigurationSetDeliveryOptionsList <a name="DataAwsSesv2ConfigurationSetDeliveryOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetDeliveryOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.get"></a>

```csharp
private DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">SendingPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">TlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions">DataAwsSesv2ConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SendingPoolName`<sup>Required</sup> <a name="SendingPoolName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```csharp
public string SendingPoolName { get; }
```

- *Type:* string

---

##### `TlsPolicy`<sup>Required</sup> <a name="TlsPolicy" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```csharp
public string TlsPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSesv2ConfigurationSetDeliveryOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions">DataAwsSesv2ConfigurationSetDeliveryOptions</a>

---


### DataAwsSesv2ConfigurationSetReputationOptionsList <a name="DataAwsSesv2ConfigurationSetReputationOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetReputationOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.get"></a>

```csharp
private DataAwsSesv2ConfigurationSetReputationOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetReputationOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetReputationOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetReputationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart">LastFreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">ReputationMetricsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions">DataAwsSesv2ConfigurationSetReputationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastFreshStart`<sup>Required</sup> <a name="LastFreshStart" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart"></a>

```csharp
public string LastFreshStart { get; }
```

- *Type:* string

---

##### `ReputationMetricsEnabled`<sup>Required</sup> <a name="ReputationMetricsEnabled" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```csharp
public IResolvable ReputationMetricsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSesv2ConfigurationSetReputationOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions">DataAwsSesv2ConfigurationSetReputationOptions</a>

---


### DataAwsSesv2ConfigurationSetSendingOptionsList <a name="DataAwsSesv2ConfigurationSetSendingOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetSendingOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.get"></a>

```csharp
private DataAwsSesv2ConfigurationSetSendingOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetSendingOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetSendingOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetSendingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">SendingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions">DataAwsSesv2ConfigurationSetSendingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SendingEnabled`<sup>Required</sup> <a name="SendingEnabled" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```csharp
public IResolvable SendingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSesv2ConfigurationSetSendingOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions">DataAwsSesv2ConfigurationSetSendingOptions</a>

---


### DataAwsSesv2ConfigurationSetSuppressionOptionsList <a name="DataAwsSesv2ConfigurationSetSuppressionOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetSuppressionOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.get"></a>

```csharp
private DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">SuppressedReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions">DataAwsSesv2ConfigurationSetSuppressionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SuppressedReasons`<sup>Required</sup> <a name="SuppressedReasons" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```csharp
public string[] SuppressedReasons { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSesv2ConfigurationSetSuppressionOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions">DataAwsSesv2ConfigurationSetSuppressionOptions</a>

---


### DataAwsSesv2ConfigurationSetTrackingOptionsList <a name="DataAwsSesv2ConfigurationSetTrackingOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetTrackingOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.get"></a>

```csharp
private DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">CustomRedirectDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions">DataAwsSesv2ConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRedirectDomain`<sup>Required</sup> <a name="CustomRedirectDomain" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```csharp
public string CustomRedirectDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSesv2ConfigurationSetTrackingOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions">DataAwsSesv2ConfigurationSetTrackingOptions</a>

---


### DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList <a name="DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.get"></a>

```csharp
private DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics">EngagementMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EngagementMetrics`<sup>Required</sup> <a name="EngagementMetrics" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics"></a>

```csharp
public string EngagementMetrics { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions</a>

---


### DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList <a name="DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.get"></a>

```csharp
private DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptimizedSharedDelivery`<sup>Required</sup> <a name="OptimizedSharedDelivery" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery"></a>

```csharp
public string OptimizedSharedDelivery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions</a>

---


### DataAwsSesv2ConfigurationSetVdmOptionsList <a name="DataAwsSesv2ConfigurationSetVdmOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetVdmOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.get"></a>

```csharp
private DataAwsSesv2ConfigurationSetVdmOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSesv2ConfigurationSetVdmOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetVdmOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSesv2ConfigurationSetVdmOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptions">DashboardOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptions">GuardianOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions">DataAwsSesv2ConfigurationSetVdmOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DashboardOptions`<sup>Required</sup> <a name="DashboardOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptions"></a>

```csharp
public DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList DashboardOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList</a>

---

##### `GuardianOptions`<sup>Required</sup> <a name="GuardianOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptions"></a>

```csharp
public DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList GuardianOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSesv2ConfigurationSetVdmOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions">DataAwsSesv2ConfigurationSetVdmOptions</a>

---



