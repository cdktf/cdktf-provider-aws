# `dataAwsCloudhsmV2Cluster` Submodule <a name="`dataAwsCloudhsmV2Cluster` Submodule" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudhsmV2Cluster <a name="DataAwsCloudhsmV2Cluster" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster aws_cloudhsm_v2_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudhsmV2Cluster(Construct Scope, string Id, DataAwsCloudhsmV2ClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig">DataAwsCloudhsmV2ClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig">DataAwsCloudhsmV2ClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetClusterState">ResetClusterState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetClusterState` <a name="ResetClusterState" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetClusterState"></a>

```csharp
private void ResetClusterState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudhsmV2Cluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudhsmV2Cluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCloudhsmV2Cluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterCertificates">ClusterCertificates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList">DataAwsCloudhsmV2ClusterClusterCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterStateInput">ClusterStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterState">ClusterState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ClusterCertificates`<sup>Required</sup> <a name="ClusterCertificates" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterCertificates"></a>

```csharp
public DataAwsCloudhsmV2ClusterClusterCertificatesList ClusterCertificates { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList">DataAwsCloudhsmV2ClusterClusterCertificatesList</a>

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ClusterStateInput`<sup>Optional</sup> <a name="ClusterStateInput" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterStateInput"></a>

```csharp
public string ClusterStateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ClusterState`<sup>Required</sup> <a name="ClusterState" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterState"></a>

```csharp
public string ClusterState { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudhsmV2ClusterClusterCertificates <a name="DataAwsCloudhsmV2ClusterClusterCertificates" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudhsmV2ClusterClusterCertificates {

};
```


### DataAwsCloudhsmV2ClusterConfig <a name="DataAwsCloudhsmV2ClusterConfig" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudhsmV2ClusterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string ClusterState = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterState">ClusterState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}.

---

##### `ClusterState`<sup>Optional</sup> <a name="ClusterState" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterState"></a>

```csharp
public string ClusterState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudhsmV2ClusterClusterCertificatesList <a name="DataAwsCloudhsmV2ClusterClusterCertificatesList" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudhsmV2ClusterClusterCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get"></a>

```csharp
private DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference <a name="DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate">AwsHardwareCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate">ClusterCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr">ClusterCsr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate">HsmCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate">ManufacturerHardwareCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates">DataAwsCloudhsmV2ClusterClusterCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsHardwareCertificate`<sup>Required</sup> <a name="AwsHardwareCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate"></a>

```csharp
public string AwsHardwareCertificate { get; }
```

- *Type:* string

---

##### `ClusterCertificate`<sup>Required</sup> <a name="ClusterCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate"></a>

```csharp
public string ClusterCertificate { get; }
```

- *Type:* string

---

##### `ClusterCsr`<sup>Required</sup> <a name="ClusterCsr" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr"></a>

```csharp
public string ClusterCsr { get; }
```

- *Type:* string

---

##### `HsmCertificate`<sup>Required</sup> <a name="HsmCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate"></a>

```csharp
public string HsmCertificate { get; }
```

- *Type:* string

---

##### `ManufacturerHardwareCertificate`<sup>Required</sup> <a name="ManufacturerHardwareCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate"></a>

```csharp
public string ManufacturerHardwareCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue"></a>

```csharp
public DataAwsCloudhsmV2ClusterClusterCertificates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates">DataAwsCloudhsmV2ClusterClusterCertificates</a>

---



