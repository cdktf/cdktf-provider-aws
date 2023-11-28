# `dataAwsFsxOntapStorageVirtualMachine` Submodule <a name="`dataAwsFsxOntapStorageVirtualMachine` Submodule" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxOntapStorageVirtualMachine <a name="DataAwsFsxOntapStorageVirtualMachine" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine aws_fsx_ontap_storage_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachine(Construct Scope, string Id, DataAwsFsxOntapStorageVirtualMachineConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig">DataAwsFsxOntapStorageVirtualMachineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig">DataAwsFsxOntapStorageVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsFsxOntapStorageVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsFsxOntapStorageVirtualMachine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsFsxOntapStorageVirtualMachine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsFsxOntapStorageVirtualMachine.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsFsxOntapStorageVirtualMachine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsFsxOntapStorageVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsFsxOntapStorageVirtualMachine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsFsxOntapStorageVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsFsxOntapStorageVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.activeDirectoryConfiguration">ActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList">DataAwsFsxOntapStorageVirtualMachineEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList">DataAwsFsxOntapStorageVirtualMachineFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycleStatus">LifecycleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycleTransitionReason">LifecycleTransitionReason</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList">DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActiveDirectoryConfiguration`<sup>Required</sup> <a name="ActiveDirectoryConfiguration" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.activeDirectoryConfiguration"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList ActiveDirectoryConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.endpoints"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList">DataAwsFsxOntapStorageVirtualMachineEndpointsList</a>

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.filter"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList">DataAwsFsxOntapStorageVirtualMachineFilterList</a>

---

##### `LifecycleStatus`<sup>Required</sup> <a name="LifecycleStatus" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycleStatus"></a>

```csharp
public string LifecycleStatus { get; }
```

- *Type:* string

---

##### `LifecycleTransitionReason`<sup>Required</sup> <a name="LifecycleTransitionReason" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycleTransitionReason"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList LifecycleTransitionReason { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList">DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration {

};
```


### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {

};
```


### DataAwsFsxOntapStorageVirtualMachineConfig <a name="DataAwsFsxOntapStorageVirtualMachineConfig" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Filter = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine#id DataAwsFsxOntapStorageVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine#tags DataAwsFsxOntapStorageVirtualMachine#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine#filter DataAwsFsxOntapStorageVirtualMachine#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine#id DataAwsFsxOntapStorageVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine#tags DataAwsFsxOntapStorageVirtualMachine#tags}.

---

### DataAwsFsxOntapStorageVirtualMachineEndpoints <a name="DataAwsFsxOntapStorageVirtualMachineEndpoints" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpoints {

};
```


### DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi {

};
```


### DataAwsFsxOntapStorageVirtualMachineEndpointsManagement <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsManagement" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsManagement {

};
```


### DataAwsFsxOntapStorageVirtualMachineEndpointsNfs <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsNfs" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsNfs {

};
```


### DataAwsFsxOntapStorageVirtualMachineEndpointsSmb <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsSmb" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsSmb {

};
```


### DataAwsFsxOntapStorageVirtualMachineFilter <a name="DataAwsFsxOntapStorageVirtualMachineFilter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine#name DataAwsFsxOntapStorageVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine#values DataAwsFsxOntapStorageVirtualMachine#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine#name DataAwsFsxOntapStorageVirtualMachine#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/data-sources/fsx_ontap_storage_virtual_machine#values DataAwsFsxOntapStorageVirtualMachine#values}.

---

### DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason <a name="DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.get"></a>

```csharp
private DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosName">NetbiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration">SelfManagedActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetbiosName`<sup>Required</sup> <a name="NetbiosName" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosName"></a>

```csharp
public string NetbiosName { get; }
```

- *Type:* string

---

##### `SelfManagedActiveDirectoryConfiguration`<sup>Required</sup> <a name="SelfManagedActiveDirectoryConfiguration" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList SelfManagedActiveDirectoryConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a>

---


### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.get"></a>

```csharp
private DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps">DnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup">FileSystemAdministratorsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps"></a>

```csharp
public string[] DnsIps { get; }
```

- *Type:* string[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `FileSystemAdministratorsGroup`<sup>Required</sup> <a name="FileSystemAdministratorsGroup" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup"></a>

```csharp
public string FileSystemAdministratorsGroup { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.get"></a>

```csharp
private DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi">DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi">DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi</a>

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsList <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.get"></a>

```csharp
private DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.get"></a>

```csharp
private DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagement">DataAwsFsxOntapStorageVirtualMachineEndpointsManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineEndpointsManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagement">DataAwsFsxOntapStorageVirtualMachineEndpointsManagement</a>

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.get"></a>

```csharp
private DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfs">DataAwsFsxOntapStorageVirtualMachineEndpointsNfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineEndpointsNfs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfs">DataAwsFsxOntapStorageVirtualMachineEndpointsNfs</a>

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.iscsi">Iscsi</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList">DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.management">Management</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList">DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList">DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.smb">Smb</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList">DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpoints">DataAwsFsxOntapStorageVirtualMachineEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Iscsi`<sup>Required</sup> <a name="Iscsi" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.iscsi"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList Iscsi { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList">DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList</a>

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.management"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList Management { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList">DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList</a>

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.nfs"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList Nfs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList">DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList</a>

---

##### `Smb`<sup>Required</sup> <a name="Smb" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.smb"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList Smb { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList">DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpoints">DataAwsFsxOntapStorageVirtualMachineEndpoints</a>

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.get"></a>

```csharp
private DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmb">DataAwsFsxOntapStorageVirtualMachineEndpointsSmb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineEndpointsSmb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmb">DataAwsFsxOntapStorageVirtualMachineEndpointsSmb</a>

---


### DataAwsFsxOntapStorageVirtualMachineFilterList <a name="DataAwsFsxOntapStorageVirtualMachineFilterList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.get"></a>

```csharp
private DataAwsFsxOntapStorageVirtualMachineFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsFsxOntapStorageVirtualMachineFilterOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineFilterOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList <a name="DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.get"></a>

```csharp
private DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason">DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.internalValue"></a>

```csharp
public DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason">DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason</a>

---



