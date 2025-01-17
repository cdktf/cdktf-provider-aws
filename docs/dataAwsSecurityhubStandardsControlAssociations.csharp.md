# `dataAwsSecurityhubStandardsControlAssociations` Submodule <a name="`dataAwsSecurityhubStandardsControlAssociations` Submodule" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecurityhubStandardsControlAssociations <a name="DataAwsSecurityhubStandardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/securityhub_standards_control_associations aws_securityhub_standards_control_associations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecurityhubStandardsControlAssociations(Construct Scope, string Id, DataAwsSecurityhubStandardsControlAssociationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig">DataAwsSecurityhubStandardsControlAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig">DataAwsSecurityhubStandardsControlAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSecurityhubStandardsControlAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSecurityhubStandardsControlAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSecurityhubStandardsControlAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSecurityhubStandardsControlAssociations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSecurityhubStandardsControlAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsSecurityhubStandardsControlAssociations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSecurityhubStandardsControlAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSecurityhubStandardsControlAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/securityhub_standards_control_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSecurityhubStandardsControlAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.standardsControlAssociations">StandardsControlAssociations</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlIdInput">SecurityControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlId">SecurityControlId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StandardsControlAssociations`<sup>Required</sup> <a name="StandardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.standardsControlAssociations"></a>

```csharp
public DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList StandardsControlAssociations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList</a>

---

##### `SecurityControlIdInput`<sup>Optional</sup> <a name="SecurityControlIdInput" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlIdInput"></a>

```csharp
public string SecurityControlIdInput { get; }
```

- *Type:* string

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.securityControlId"></a>

```csharp
public string SecurityControlId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecurityhubStandardsControlAssociationsConfig <a name="DataAwsSecurityhubStandardsControlAssociationsConfig" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecurityhubStandardsControlAssociationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecurityControlId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.securityControlId">SecurityControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsConfig.property.securityControlId"></a>

```csharp
public string SecurityControlId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}.

---

### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get"></a>

```csharp
private DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference <a name="DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.associationStatus">AssociationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.relatedRequirements">RelatedRequirements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlArn">SecurityControlArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlId">SecurityControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsArn">StandardsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlDescription">StandardsControlDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlTitle">StandardsControlTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedReason">UpdatedReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssociationStatus`<sup>Required</sup> <a name="AssociationStatus" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.associationStatus"></a>

```csharp
public string AssociationStatus { get; }
```

- *Type:* string

---

##### `RelatedRequirements`<sup>Required</sup> <a name="RelatedRequirements" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.relatedRequirements"></a>

```csharp
public string[] RelatedRequirements { get; }
```

- *Type:* string[]

---

##### `SecurityControlArn`<sup>Required</sup> <a name="SecurityControlArn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlArn"></a>

```csharp
public string SecurityControlArn { get; }
```

- *Type:* string

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.securityControlId"></a>

```csharp
public string SecurityControlId { get; }
```

- *Type:* string

---

##### `StandardsArn`<sup>Required</sup> <a name="StandardsArn" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsArn"></a>

```csharp
public string StandardsArn { get; }
```

- *Type:* string

---

##### `StandardsControlDescription`<sup>Required</sup> <a name="StandardsControlDescription" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlDescription"></a>

```csharp
public string StandardsControlDescription { get; }
```

- *Type:* string

---

##### `StandardsControlTitle`<sup>Required</sup> <a name="StandardsControlTitle" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.standardsControlTitle"></a>

```csharp
public string StandardsControlTitle { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UpdatedReason`<sup>Required</sup> <a name="UpdatedReason" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.updatedReason"></a>

```csharp
public string UpdatedReason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecurityhubStandardsControlAssociations.DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations">DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations</a>

---



