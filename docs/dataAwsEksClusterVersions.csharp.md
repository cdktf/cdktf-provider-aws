# `dataAwsEksClusterVersions` Submodule <a name="`dataAwsEksClusterVersions` Submodule" id="@cdktf/provider-aws.dataAwsEksClusterVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEksClusterVersions <a name="DataAwsEksClusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions aws_eks_cluster_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEksClusterVersions(Construct Scope, string Id, DataAwsEksClusterVersionsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig">DataAwsEksClusterVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig">DataAwsEksClusterVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterVersionsOnly">ResetClusterVersionsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetDefaultOnly">ResetDefaultOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetIncludeAll">ResetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetVersionStatus">ResetVersionStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterType"></a>

```csharp
private void ResetClusterType()
```

##### `ResetClusterVersionsOnly` <a name="ResetClusterVersionsOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetClusterVersionsOnly"></a>

```csharp
private void ResetClusterVersionsOnly()
```

##### `ResetDefaultOnly` <a name="ResetDefaultOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetDefaultOnly"></a>

```csharp
private void ResetDefaultOnly()
```

##### `ResetIncludeAll` <a name="ResetIncludeAll" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetIncludeAll"></a>

```csharp
private void ResetIncludeAll()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVersionStatus` <a name="ResetVersionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.resetVersionStatus"></a>

```csharp
private void ResetVersionStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEksClusterVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEksClusterVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEksClusterVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEksClusterVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEksClusterVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsEksClusterVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEksClusterVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEksClusterVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEksClusterVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersions">ClusterVersions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList">DataAwsEksClusterVersionsClusterVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnlyInput">ClusterVersionsOnlyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnlyInput">DefaultOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAllInput">IncludeAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatusInput">VersionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterType">ClusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnly">ClusterVersionsOnly</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnly">DefaultOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAll">IncludeAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatus">VersionStatus</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ClusterVersions`<sup>Required</sup> <a name="ClusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersions"></a>

```csharp
public DataAwsEksClusterVersionsClusterVersionsList ClusterVersions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList">DataAwsEksClusterVersionsClusterVersionsList</a>

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterTypeInput"></a>

```csharp
public string ClusterTypeInput { get; }
```

- *Type:* string

---

##### `ClusterVersionsOnlyInput`<sup>Optional</sup> <a name="ClusterVersionsOnlyInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnlyInput"></a>

```csharp
public string[] ClusterVersionsOnlyInput { get; }
```

- *Type:* string[]

---

##### `DefaultOnlyInput`<sup>Optional</sup> <a name="DefaultOnlyInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnlyInput"></a>

```csharp
public object DefaultOnlyInput { get; }
```

- *Type:* object

---

##### `IncludeAllInput`<sup>Optional</sup> <a name="IncludeAllInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAllInput"></a>

```csharp
public object IncludeAllInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VersionStatusInput`<sup>Optional</sup> <a name="VersionStatusInput" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatusInput"></a>

```csharp
public string VersionStatusInput { get; }
```

- *Type:* string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterType"></a>

```csharp
public string ClusterType { get; }
```

- *Type:* string

---

##### `ClusterVersionsOnly`<sup>Required</sup> <a name="ClusterVersionsOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.clusterVersionsOnly"></a>

```csharp
public string[] ClusterVersionsOnly { get; }
```

- *Type:* string[]

---

##### `DefaultOnly`<sup>Required</sup> <a name="DefaultOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.defaultOnly"></a>

```csharp
public object DefaultOnly { get; }
```

- *Type:* object

---

##### `IncludeAll`<sup>Required</sup> <a name="IncludeAll" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.includeAll"></a>

```csharp
public object IncludeAll { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `VersionStatus`<sup>Required</sup> <a name="VersionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.versionStatus"></a>

```csharp
public string VersionStatus { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEksClusterVersionsClusterVersions <a name="DataAwsEksClusterVersionsClusterVersions" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEksClusterVersionsClusterVersions {

};
```


### DataAwsEksClusterVersionsConfig <a name="DataAwsEksClusterVersionsConfig" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEksClusterVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterType = null,
    string[] ClusterVersionsOnly = null,
    object DefaultOnly = null,
    object IncludeAll = null,
    string Region = null,
    string VersionStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterType">ClusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterVersionsOnly">ClusterVersionsOnly</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.defaultOnly">DefaultOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.includeAll">IncludeAll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.versionStatus">VersionStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterType"></a>

```csharp
public string ClusterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}.

---

##### `ClusterVersionsOnly`<sup>Optional</sup> <a name="ClusterVersionsOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.clusterVersionsOnly"></a>

```csharp
public string[] ClusterVersionsOnly { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}.

---

##### `DefaultOnly`<sup>Optional</sup> <a name="DefaultOnly" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.defaultOnly"></a>

```csharp
public object DefaultOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}.

---

##### `IncludeAll`<sup>Optional</sup> <a name="IncludeAll" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.includeAll"></a>

```csharp
public object IncludeAll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#region DataAwsEksClusterVersions#region}

---

##### `VersionStatus`<sup>Optional</sup> <a name="VersionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsConfig.property.versionStatus"></a>

```csharp
public string VersionStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEksClusterVersionsClusterVersionsList <a name="DataAwsEksClusterVersionsClusterVersionsList" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEksClusterVersionsClusterVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get"></a>

```csharp
private DataAwsEksClusterVersionsClusterVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEksClusterVersionsClusterVersionsOutputReference <a name="DataAwsEksClusterVersionsClusterVersionsOutputReference" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEksClusterVersionsClusterVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterType">ClusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultPlatformVersion">DefaultPlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfExtendedSupportDate">EndOfExtendedSupportDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfStandardSupportDate">EndOfStandardSupportDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.kubernetesPatchVersion">KubernetesPatchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.releaseDate">ReleaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.versionStatus">VersionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions">DataAwsEksClusterVersionsClusterVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterType"></a>

```csharp
public string ClusterType { get; }
```

- *Type:* string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `DefaultPlatformVersion`<sup>Required</sup> <a name="DefaultPlatformVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultPlatformVersion"></a>

```csharp
public string DefaultPlatformVersion { get; }
```

- *Type:* string

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.defaultVersion"></a>

```csharp
public IResolvable DefaultVersion { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EndOfExtendedSupportDate`<sup>Required</sup> <a name="EndOfExtendedSupportDate" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfExtendedSupportDate"></a>

```csharp
public string EndOfExtendedSupportDate { get; }
```

- *Type:* string

---

##### `EndOfStandardSupportDate`<sup>Required</sup> <a name="EndOfStandardSupportDate" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.endOfStandardSupportDate"></a>

```csharp
public string EndOfStandardSupportDate { get; }
```

- *Type:* string

---

##### `KubernetesPatchVersion`<sup>Required</sup> <a name="KubernetesPatchVersion" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.kubernetesPatchVersion"></a>

```csharp
public string KubernetesPatchVersion { get; }
```

- *Type:* string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.releaseDate"></a>

```csharp
public string ReleaseDate { get; }
```

- *Type:* string

---

##### `VersionStatus`<sup>Required</sup> <a name="VersionStatus" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.versionStatus"></a>

```csharp
public string VersionStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEksClusterVersionsClusterVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEksClusterVersions.DataAwsEksClusterVersionsClusterVersions">DataAwsEksClusterVersionsClusterVersions</a>

---



