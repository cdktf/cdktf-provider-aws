# `dataAwsKinesisFirehoseDeliveryStream` Submodule <a name="`dataAwsKinesisFirehoseDeliveryStream` Submodule" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKinesisFirehoseDeliveryStream <a name="DataAwsKinesisFirehoseDeliveryStream" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream aws_kinesis_firehose_delivery_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKinesisFirehoseDeliveryStream(Construct Scope, string Id, DataAwsKinesisFirehoseDeliveryStreamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig">DataAwsKinesisFirehoseDeliveryStreamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig">DataAwsKinesisFirehoseDeliveryStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsKinesisFirehoseDeliveryStream resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsKinesisFirehoseDeliveryStream.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsKinesisFirehoseDeliveryStream.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsKinesisFirehoseDeliveryStream.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsKinesisFirehoseDeliveryStream.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsKinesisFirehoseDeliveryStream resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsKinesisFirehoseDeliveryStream to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsKinesisFirehoseDeliveryStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsKinesisFirehoseDeliveryStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKinesisFirehoseDeliveryStreamConfig <a name="DataAwsKinesisFirehoseDeliveryStreamConfig" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsKinesisFirehoseDeliveryStreamConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#name DataAwsKinesisFirehoseDeliveryStream#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#id DataAwsKinesisFirehoseDeliveryStream#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#name DataAwsKinesisFirehoseDeliveryStream#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#id DataAwsKinesisFirehoseDeliveryStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#region DataAwsKinesisFirehoseDeliveryStream#region}

---



