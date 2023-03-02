# `dataAwsRedshiftOrderableCluster` Submodule <a name="`dataAwsRedshiftOrderableCluster` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftOrderableCluster <a name="DataAwsRedshiftOrderableCluster" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster aws_redshift_orderable_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRedshiftOrderableCluster(Construct Scope, string Id, DataAwsRedshiftOrderableClusterConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig">DataAwsRedshiftOrderableClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig">DataAwsRedshiftOrderableClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterVersion">ResetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetPreferredNodeTypes">ResetPreferredNodeTypes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterType"></a>

```csharp
private void ResetClusterType()
```

##### `ResetClusterVersion` <a name="ResetClusterVersion" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterVersion"></a>

```csharp
private void ResetClusterVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetNodeType"></a>

```csharp
private void ResetNodeType()
```

##### `ResetPreferredNodeTypes` <a name="ResetPreferredNodeTypes" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetPreferredNodeTypes"></a>

```csharp
private void ResetPreferredNodeTypes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRedshiftOrderableCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRedshiftOrderableCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsRedshiftOrderableCluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypesInput">PreferredNodeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterType">ClusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypes">PreferredNodeTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterTypeInput"></a>

```csharp
public string ClusterTypeInput { get; }
```

- *Type:* string

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersionInput"></a>

```csharp
public string ClusterVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `PreferredNodeTypesInput`<sup>Optional</sup> <a name="PreferredNodeTypesInput" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypesInput"></a>

```csharp
public string[] PreferredNodeTypesInput { get; }
```

- *Type:* string[]

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterType"></a>

```csharp
public string ClusterType { get; }
```

- *Type:* string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `PreferredNodeTypes`<sup>Required</sup> <a name="PreferredNodeTypes" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypes"></a>

```csharp
public string[] PreferredNodeTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftOrderableClusterConfig <a name="DataAwsRedshiftOrderableClusterConfig" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsRedshiftOrderableClusterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterType = null,
    string ClusterVersion = null,
    string Id = null,
    string NodeType = null,
    string[] PreferredNodeTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterType">ClusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.nodeType">NodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.preferredNodeTypes">PreferredNodeTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterType"></a>

```csharp
public string ClusterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}.

---

##### `ClusterVersion`<sup>Optional</sup> <a name="ClusterVersion" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}.

---

##### `PreferredNodeTypes`<sup>Optional</sup> <a name="PreferredNodeTypes" id="@cdktf/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.preferredNodeTypes"></a>

```csharp
public string[] PreferredNodeTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}.

---



