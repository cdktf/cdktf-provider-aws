# `dataAwsApprunnerHostedZoneId` Submodule <a name="`dataAwsApprunnerHostedZoneId` Submodule" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApprunnerHostedZoneId <a name="DataAwsApprunnerHostedZoneId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/apprunner_hosted_zone_id aws_apprunner_hosted_zone_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsApprunnerHostedZoneId(Construct Scope, string Id, DataAwsApprunnerHostedZoneIdConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig">DataAwsApprunnerHostedZoneIdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig">DataAwsApprunnerHostedZoneIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsApprunnerHostedZoneId resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsApprunnerHostedZoneId.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsApprunnerHostedZoneId.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsApprunnerHostedZoneId.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsApprunnerHostedZoneId.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsApprunnerHostedZoneId resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsApprunnerHostedZoneId to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsApprunnerHostedZoneId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/apprunner_hosted_zone_id#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsApprunnerHostedZoneId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApprunnerHostedZoneIdConfig <a name="DataAwsApprunnerHostedZoneIdConfig" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsApprunnerHostedZoneIdConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/apprunner_hosted_zone_id#region DataAwsApprunnerHostedZoneId#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/apprunner_hosted_zone_id#region DataAwsApprunnerHostedZoneId#region}.

---



