# `dataAwsEmrSupportedInstanceTypes` Submodule <a name="`dataAwsEmrSupportedInstanceTypes` Submodule" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEmrSupportedInstanceTypes <a name="DataAwsEmrSupportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/emr_supported_instance_types aws_emr_supported_instance_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrSupportedInstanceTypes(Construct Scope, string Id, DataAwsEmrSupportedInstanceTypesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig">DataAwsEmrSupportedInstanceTypesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig">DataAwsEmrSupportedInstanceTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.putSupportedInstanceTypes">PutSupportedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.resetSupportedInstanceTypes">ResetSupportedInstanceTypes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSupportedInstanceTypes` <a name="PutSupportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.putSupportedInstanceTypes"></a>

```csharp
private void PutSupportedInstanceTypes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.putSupportedInstanceTypes.parameter.value"></a>

- *Type:* object

---

##### `ResetSupportedInstanceTypes` <a name="ResetSupportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.resetSupportedInstanceTypes"></a>

```csharp
private void ResetSupportedInstanceTypes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEmrSupportedInstanceTypes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEmrSupportedInstanceTypes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEmrSupportedInstanceTypes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEmrSupportedInstanceTypes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEmrSupportedInstanceTypes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsEmrSupportedInstanceTypes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEmrSupportedInstanceTypes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEmrSupportedInstanceTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/emr_supported_instance_types#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEmrSupportedInstanceTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.supportedInstanceTypes">SupportedInstanceTypes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.releaseLabelInput">ReleaseLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.supportedInstanceTypesInput">SupportedInstanceTypesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.releaseLabel">ReleaseLabel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SupportedInstanceTypes`<sup>Required</sup> <a name="SupportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.supportedInstanceTypes"></a>

```csharp
public DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList SupportedInstanceTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList">DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList</a>

---

##### `ReleaseLabelInput`<sup>Optional</sup> <a name="ReleaseLabelInput" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.releaseLabelInput"></a>

```csharp
public string ReleaseLabelInput { get; }
```

- *Type:* string

---

##### `SupportedInstanceTypesInput`<sup>Optional</sup> <a name="SupportedInstanceTypesInput" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.supportedInstanceTypesInput"></a>

```csharp
public object SupportedInstanceTypesInput { get; }
```

- *Type:* object

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.releaseLabel"></a>

```csharp
public string ReleaseLabel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEmrSupportedInstanceTypesConfig <a name="DataAwsEmrSupportedInstanceTypesConfig" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrSupportedInstanceTypesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ReleaseLabel,
    object SupportedInstanceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.releaseLabel">ReleaseLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/emr_supported_instance_types#release_label DataAwsEmrSupportedInstanceTypes#release_label}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.supportedInstanceTypes">SupportedInstanceTypes</a></code> | <code>object</code> | supported_instance_types block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.releaseLabel"></a>

```csharp
public string ReleaseLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/emr_supported_instance_types#release_label DataAwsEmrSupportedInstanceTypes#release_label}.

---

##### `SupportedInstanceTypes`<sup>Optional</sup> <a name="SupportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesConfig.property.supportedInstanceTypes"></a>

```csharp
public object SupportedInstanceTypes { get; set; }
```

- *Type:* object

supported_instance_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/emr_supported_instance_types#supported_instance_types DataAwsEmrSupportedInstanceTypes#supported_instance_types}

---

### DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes <a name="DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList <a name="DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.get"></a>

```csharp
private DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference <a name="DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsOptimizedAvailable">EbsOptimizedAvailable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsOptimizedByDefault">EbsOptimizedByDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsStorageOnly">EbsStorageOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.instanceFamilyId">InstanceFamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.is64BitsOnly">Is64BitsOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.memoryGb">MemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.numberOfDisks">NumberOfDisks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.storageGb">StorageGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.vcpu">Vcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `EbsOptimizedAvailable`<sup>Required</sup> <a name="EbsOptimizedAvailable" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsOptimizedAvailable"></a>

```csharp
public IResolvable EbsOptimizedAvailable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EbsOptimizedByDefault`<sup>Required</sup> <a name="EbsOptimizedByDefault" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsOptimizedByDefault"></a>

```csharp
public IResolvable EbsOptimizedByDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EbsStorageOnly`<sup>Required</sup> <a name="EbsStorageOnly" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.ebsStorageOnly"></a>

```csharp
public IResolvable EbsStorageOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InstanceFamilyId`<sup>Required</sup> <a name="InstanceFamilyId" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.instanceFamilyId"></a>

```csharp
public string InstanceFamilyId { get; }
```

- *Type:* string

---

##### `Is64BitsOnly`<sup>Required</sup> <a name="Is64BitsOnly" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.is64BitsOnly"></a>

```csharp
public IResolvable Is64BitsOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.memoryGb"></a>

```csharp
public double MemoryGb { get; }
```

- *Type:* double

---

##### `NumberOfDisks`<sup>Required</sup> <a name="NumberOfDisks" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.numberOfDisks"></a>

```csharp
public double NumberOfDisks { get; }
```

- *Type:* double

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.storageGb"></a>

```csharp
public double StorageGb { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Vcpu`<sup>Required</sup> <a name="Vcpu" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.vcpu"></a>

```csharp
public double Vcpu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEmrSupportedInstanceTypes.DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



