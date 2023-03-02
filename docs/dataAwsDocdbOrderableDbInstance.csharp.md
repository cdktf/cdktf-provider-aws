# `dataAwsDocdbOrderableDbInstance` Submodule <a name="`dataAwsDocdbOrderableDbInstance` Submodule" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDocdbOrderableDbInstance <a name="DataAwsDocdbOrderableDbInstance" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance aws_docdb_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDocdbOrderableDbInstance(Construct Scope, string Id, DataAwsDocdbOrderableDbInstanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig">DataAwsDocdbOrderableDbInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig">DataAwsDocdbOrderableDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetPreferredInstanceClasses">ResetPreferredInstanceClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetInstanceClass"></a>

```csharp
private void ResetInstanceClass()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetPreferredInstanceClasses` <a name="ResetPreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetPreferredInstanceClasses"></a>

```csharp
private void ResetPreferredInstanceClasses()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.resetVpc"></a>

```csharp
private void ResetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDocdbOrderableDbInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDocdbOrderableDbInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDocdbOrderableDbInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClassInput">InstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClassesInput">PreferredInstanceClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpcInput">VpcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClass">InstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClasses">PreferredInstanceClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpc">Vpc</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClassInput"></a>

```csharp
public string InstanceClassInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `PreferredInstanceClassesInput`<sup>Optional</sup> <a name="PreferredInstanceClassesInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```csharp
public string[] PreferredInstanceClassesInput { get; }
```

- *Type:* string[]

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpcInput"></a>

```csharp
public object VpcInput { get; }
```

- *Type:* object

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.instanceClass"></a>

```csharp
public string InstanceClass { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `PreferredInstanceClasses`<sup>Required</sup> <a name="PreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.preferredInstanceClasses"></a>

```csharp
public string[] PreferredInstanceClasses { get; }
```

- *Type:* string[]

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.vpc"></a>

```csharp
public object Vpc { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDocdbOrderableDbInstanceConfig <a name="DataAwsDocdbOrderableDbInstanceConfig" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDocdbOrderableDbInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Engine = null,
    string EngineVersion = null,
    string Id = null,
    string InstanceClass = null,
    string LicenseModel = null,
    string[] PreferredInstanceClasses = null,
    object Vpc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.instanceClass">InstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.preferredInstanceClasses">PreferredInstanceClasses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.vpc">Vpc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.instanceClass"></a>

```csharp
public string InstanceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}.

---

##### `PreferredInstanceClasses`<sup>Optional</sup> <a name="PreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```csharp
public string[] PreferredInstanceClasses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}.

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktf/provider-aws.dataAwsDocdbOrderableDbInstance.DataAwsDocdbOrderableDbInstanceConfig.property.vpc"></a>

```csharp
public object Vpc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}.

---



