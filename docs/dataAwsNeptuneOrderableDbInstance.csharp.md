# `dataAwsNeptuneOrderableDbInstance` Submodule <a name="`dataAwsNeptuneOrderableDbInstance` Submodule" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNeptuneOrderableDbInstance <a name="DataAwsNeptuneOrderableDbInstance" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance aws_neptune_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNeptuneOrderableDbInstance(Construct Scope, string Id, DataAwsNeptuneOrderableDbInstanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig">DataAwsNeptuneOrderableDbInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig">DataAwsNeptuneOrderableDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetPreferredInstanceClasses">ResetPreferredInstanceClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetInstanceClass"></a>

```csharp
private void ResetInstanceClass()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetPreferredInstanceClasses` <a name="ResetPreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetPreferredInstanceClasses"></a>

```csharp
private void ResetPreferredInstanceClasses()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetVpc"></a>

```csharp
private void ResetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNeptuneOrderableDbInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNeptuneOrderableDbInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNeptuneOrderableDbInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerDbInstance">MaxIopsPerDbInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerGib">MaxIopsPerGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxStorageSize">MaxStorageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerDbInstance">MinIopsPerDbInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerGib">MinIopsPerGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minStorageSize">MinStorageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.multiAzCapable">MultiAzCapable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.readReplicaCapable">ReadReplicaCapable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsEnhancedMonitoring">SupportsEnhancedMonitoring</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIamDatabaseAuthentication">SupportsIamDatabaseAuthentication</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIops">SupportsIops</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsPerformanceInsights">SupportsPerformanceInsights</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsStorageEncryption">SupportsStorageEncryption</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClassInput">InstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClassesInput">PreferredInstanceClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpcInput">VpcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClass">InstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClasses">PreferredInstanceClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpc">Vpc</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `MaxIopsPerDbInstance`<sup>Required</sup> <a name="MaxIopsPerDbInstance" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerDbInstance"></a>

```csharp
public double MaxIopsPerDbInstance { get; }
```

- *Type:* double

---

##### `MaxIopsPerGib`<sup>Required</sup> <a name="MaxIopsPerGib" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerGib"></a>

```csharp
public double MaxIopsPerGib { get; }
```

- *Type:* double

---

##### `MaxStorageSize`<sup>Required</sup> <a name="MaxStorageSize" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxStorageSize"></a>

```csharp
public double MaxStorageSize { get; }
```

- *Type:* double

---

##### `MinIopsPerDbInstance`<sup>Required</sup> <a name="MinIopsPerDbInstance" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerDbInstance"></a>

```csharp
public double MinIopsPerDbInstance { get; }
```

- *Type:* double

---

##### `MinIopsPerGib`<sup>Required</sup> <a name="MinIopsPerGib" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerGib"></a>

```csharp
public double MinIopsPerGib { get; }
```

- *Type:* double

---

##### `MinStorageSize`<sup>Required</sup> <a name="MinStorageSize" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minStorageSize"></a>

```csharp
public double MinStorageSize { get; }
```

- *Type:* double

---

##### `MultiAzCapable`<sup>Required</sup> <a name="MultiAzCapable" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.multiAzCapable"></a>

```csharp
public IResolvable MultiAzCapable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReadReplicaCapable`<sup>Required</sup> <a name="ReadReplicaCapable" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.readReplicaCapable"></a>

```csharp
public IResolvable ReadReplicaCapable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SupportsEnhancedMonitoring`<sup>Required</sup> <a name="SupportsEnhancedMonitoring" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsEnhancedMonitoring"></a>

```csharp
public IResolvable SupportsEnhancedMonitoring { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SupportsIamDatabaseAuthentication`<sup>Required</sup> <a name="SupportsIamDatabaseAuthentication" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIamDatabaseAuthentication"></a>

```csharp
public IResolvable SupportsIamDatabaseAuthentication { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SupportsIops`<sup>Required</sup> <a name="SupportsIops" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIops"></a>

```csharp
public IResolvable SupportsIops { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SupportsPerformanceInsights`<sup>Required</sup> <a name="SupportsPerformanceInsights" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsPerformanceInsights"></a>

```csharp
public IResolvable SupportsPerformanceInsights { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SupportsStorageEncryption`<sup>Required</sup> <a name="SupportsStorageEncryption" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsStorageEncryption"></a>

```csharp
public IResolvable SupportsStorageEncryption { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClassInput"></a>

```csharp
public string InstanceClassInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `PreferredInstanceClassesInput`<sup>Optional</sup> <a name="PreferredInstanceClassesInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```csharp
public string[] PreferredInstanceClassesInput { get; }
```

- *Type:* string[]

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpcInput"></a>

```csharp
public object VpcInput { get; }
```

- *Type:* object

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClass"></a>

```csharp
public string InstanceClass { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `PreferredInstanceClasses`<sup>Required</sup> <a name="PreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClasses"></a>

```csharp
public string[] PreferredInstanceClasses { get; }
```

- *Type:* string[]

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpc"></a>

```csharp
public object Vpc { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNeptuneOrderableDbInstanceConfig <a name="DataAwsNeptuneOrderableDbInstanceConfig" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNeptuneOrderableDbInstanceConfig {
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
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine DataAwsNeptuneOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#id DataAwsNeptuneOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.instanceClass">InstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#license_model DataAwsNeptuneOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.preferredInstanceClasses">PreferredInstanceClasses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.vpc">Vpc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#vpc DataAwsNeptuneOrderableDbInstance#vpc}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine DataAwsNeptuneOrderableDbInstance#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#id DataAwsNeptuneOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.instanceClass"></a>

```csharp
public string InstanceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#license_model DataAwsNeptuneOrderableDbInstance#license_model}.

---

##### `PreferredInstanceClasses`<sup>Optional</sup> <a name="PreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```csharp
public string[] PreferredInstanceClasses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}.

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.vpc"></a>

```csharp
public object Vpc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#vpc DataAwsNeptuneOrderableDbInstance#vpc}.

---



