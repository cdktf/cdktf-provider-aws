# `dataAwsElasticacheReservedCacheNodeOffering` Submodule <a name="`dataAwsElasticacheReservedCacheNodeOffering` Submodule" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheReservedCacheNodeOffering <a name="DataAwsElasticacheReservedCacheNodeOffering" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/elasticache_reserved_cache_node_offering aws_elasticache_reserved_cache_node_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsElasticacheReservedCacheNodeOffering(Construct Scope, string Id, DataAwsElasticacheReservedCacheNodeOfferingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig">DataAwsElasticacheReservedCacheNodeOfferingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig">DataAwsElasticacheReservedCacheNodeOfferingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsElasticacheReservedCacheNodeOffering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsElasticacheReservedCacheNodeOffering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsElasticacheReservedCacheNodeOffering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsElasticacheReservedCacheNodeOffering.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsElasticacheReservedCacheNodeOffering.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsElasticacheReservedCacheNodeOffering resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsElasticacheReservedCacheNodeOffering to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsElasticacheReservedCacheNodeOffering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/elasticache_reserved_cache_node_offering#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsElasticacheReservedCacheNodeOffering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.fixedPrice">FixedPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringId">OfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cacheNodeTypeInput">CacheNodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringTypeInput">OfferingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.productDescriptionInput">ProductDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cacheNodeType">CacheNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringType">OfferingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.productDescription">ProductDescription</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `FixedPrice`<sup>Required</sup> <a name="FixedPrice" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.fixedPrice"></a>

```csharp
public double FixedPrice { get; }
```

- *Type:* double

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringId"></a>

```csharp
public string OfferingId { get; }
```

- *Type:* string

---

##### `CacheNodeTypeInput`<sup>Optional</sup> <a name="CacheNodeTypeInput" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cacheNodeTypeInput"></a>

```csharp
public string CacheNodeTypeInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `OfferingTypeInput`<sup>Optional</sup> <a name="OfferingTypeInput" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringTypeInput"></a>

```csharp
public string OfferingTypeInput { get; }
```

- *Type:* string

---

##### `ProductDescriptionInput`<sup>Optional</sup> <a name="ProductDescriptionInput" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.productDescriptionInput"></a>

```csharp
public string ProductDescriptionInput { get; }
```

- *Type:* string

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.cacheNodeType"></a>

```csharp
public string CacheNodeType { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `OfferingType`<sup>Required</sup> <a name="OfferingType" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.offeringType"></a>

```csharp
public string OfferingType { get; }
```

- *Type:* string

---

##### `ProductDescription`<sup>Required</sup> <a name="ProductDescription" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.productDescription"></a>

```csharp
public string ProductDescription { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOffering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheReservedCacheNodeOfferingConfig <a name="DataAwsElasticacheReservedCacheNodeOfferingConfig" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsElasticacheReservedCacheNodeOfferingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CacheNodeType,
    string Duration,
    string OfferingType,
    string ProductDescription
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.cacheNodeType">CacheNodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/elasticache_reserved_cache_node_offering#cache_node_type DataAwsElasticacheReservedCacheNodeOffering#cache_node_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/elasticache_reserved_cache_node_offering#duration DataAwsElasticacheReservedCacheNodeOffering#duration}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.offeringType">OfferingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/elasticache_reserved_cache_node_offering#offering_type DataAwsElasticacheReservedCacheNodeOffering#offering_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.productDescription">ProductDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/elasticache_reserved_cache_node_offering#product_description DataAwsElasticacheReservedCacheNodeOffering#product_description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.cacheNodeType"></a>

```csharp
public string CacheNodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/elasticache_reserved_cache_node_offering#cache_node_type DataAwsElasticacheReservedCacheNodeOffering#cache_node_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/elasticache_reserved_cache_node_offering#duration DataAwsElasticacheReservedCacheNodeOffering#duration}.

---

##### `OfferingType`<sup>Required</sup> <a name="OfferingType" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.offeringType"></a>

```csharp
public string OfferingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/elasticache_reserved_cache_node_offering#offering_type DataAwsElasticacheReservedCacheNodeOffering#offering_type}.

---

##### `ProductDescription`<sup>Required</sup> <a name="ProductDescription" id="@cdktf/provider-aws.dataAwsElasticacheReservedCacheNodeOffering.DataAwsElasticacheReservedCacheNodeOfferingConfig.property.productDescription"></a>

```csharp
public string ProductDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/elasticache_reserved_cache_node_offering#product_description DataAwsElasticacheReservedCacheNodeOffering#product_description}.

---



