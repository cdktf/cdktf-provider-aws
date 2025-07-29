# `dataAwsRoute53ProfilesProfiles` Submodule <a name="`dataAwsRoute53ProfilesProfiles` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ProfilesProfiles <a name="DataAwsRoute53ProfilesProfiles" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/route53profiles_profiles aws_route53profiles_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ProfilesProfiles(Construct Scope, string Id, DataAwsRoute53ProfilesProfilesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig">DataAwsRoute53ProfilesProfilesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig">DataAwsRoute53ProfilesProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRoute53ProfilesProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRoute53ProfilesProfiles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRoute53ProfilesProfiles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRoute53ProfilesProfiles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRoute53ProfilesProfiles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsRoute53ProfilesProfiles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRoute53ProfilesProfiles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRoute53ProfilesProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/route53profiles_profiles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53ProfilesProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.profiles">Profiles</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList">DataAwsRoute53ProfilesProfilesProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.profiles"></a>

```csharp
public DataAwsRoute53ProfilesProfilesProfilesList Profiles { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList">DataAwsRoute53ProfilesProfilesProfilesList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfiles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ProfilesProfilesConfig <a name="DataAwsRoute53ProfilesProfilesConfig" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ProfilesProfilesConfig {
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
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/route53profiles_profiles#region DataAwsRoute53ProfilesProfiles#region}

---

### DataAwsRoute53ProfilesProfilesProfiles <a name="DataAwsRoute53ProfilesProfilesProfiles" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ProfilesProfilesProfiles {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ProfilesProfilesProfilesList <a name="DataAwsRoute53ProfilesProfilesProfilesList" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ProfilesProfilesProfilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.get"></a>

```csharp
private DataAwsRoute53ProfilesProfilesProfilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsRoute53ProfilesProfilesProfilesOutputReference <a name="DataAwsRoute53ProfilesProfilesProfilesOutputReference" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRoute53ProfilesProfilesProfilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.shareStatus">ShareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfiles">DataAwsRoute53ProfilesProfilesProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ShareStatus`<sup>Required</sup> <a name="ShareStatus" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.shareStatus"></a>

```csharp
public string ShareStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfilesOutputReference.property.internalValue"></a>

```csharp
public DataAwsRoute53ProfilesProfilesProfiles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ProfilesProfiles.DataAwsRoute53ProfilesProfilesProfiles">DataAwsRoute53ProfilesProfilesProfiles</a>

---



