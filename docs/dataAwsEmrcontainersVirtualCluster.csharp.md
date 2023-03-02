# `dataAwsEmrcontainersVirtualCluster` Submodule <a name="`dataAwsEmrcontainersVirtualCluster` Submodule" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEmrcontainersVirtualCluster <a name="DataAwsEmrcontainersVirtualCluster" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualCluster(Construct Scope, string Id, DataAwsEmrcontainersVirtualClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig">DataAwsEmrcontainersVirtualClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig">DataAwsEmrcontainersVirtualClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEmrcontainersVirtualCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEmrcontainersVirtualCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEmrcontainersVirtualCluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.containerProvider">ContainerProvider</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList">DataAwsEmrcontainersVirtualClusterContainerProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterIdInput">VirtualClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterId">VirtualClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ContainerProvider`<sup>Required</sup> <a name="ContainerProvider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.containerProvider"></a>

```csharp
public DataAwsEmrcontainersVirtualClusterContainerProviderList ContainerProvider { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList">DataAwsEmrcontainersVirtualClusterContainerProviderList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualClusterIdInput`<sup>Optional</sup> <a name="VirtualClusterIdInput" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterIdInput"></a>

```csharp
public string VirtualClusterIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualClusterId`<sup>Required</sup> <a name="VirtualClusterId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.virtualClusterId"></a>

```csharp
public string VirtualClusterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEmrcontainersVirtualClusterConfig <a name="DataAwsEmrcontainersVirtualClusterConfig" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualClusterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VirtualClusterId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.virtualClusterId">VirtualClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#virtual_cluster_id DataAwsEmrcontainersVirtualCluster#virtual_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#id DataAwsEmrcontainersVirtualCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#tags DataAwsEmrcontainersVirtualCluster#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VirtualClusterId`<sup>Required</sup> <a name="VirtualClusterId" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.virtualClusterId"></a>

```csharp
public string VirtualClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#virtual_cluster_id DataAwsEmrcontainersVirtualCluster#virtual_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#id DataAwsEmrcontainersVirtualCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emrcontainers_virtual_cluster#tags DataAwsEmrcontainersVirtualCluster#tags}.

---

### DataAwsEmrcontainersVirtualClusterContainerProvider <a name="DataAwsEmrcontainersVirtualClusterContainerProvider" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualClusterContainerProvider {

};
```


### DataAwsEmrcontainersVirtualClusterContainerProviderInfo <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfo" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualClusterContainerProviderInfo {

};
```


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.get"></a>

```csharp
private DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo</a>

---


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoList <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoList" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualClusterContainerProviderInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.get"></a>

```csharp
private DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference <a name="DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo">EksInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EksInfo`<sup>Required</sup> <a name="EksInfo" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.eksInfo"></a>

```csharp
public DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList EksInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsEmrcontainersVirtualClusterContainerProviderInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfo">DataAwsEmrcontainersVirtualClusterContainerProviderInfo</a>

---


### DataAwsEmrcontainersVirtualClusterContainerProviderList <a name="DataAwsEmrcontainersVirtualClusterContainerProviderList" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualClusterContainerProviderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.get"></a>

```csharp
private DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference <a name="DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.info">Info</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider">DataAwsEmrcontainersVirtualClusterContainerProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.info"></a>

```csharp
public DataAwsEmrcontainersVirtualClusterContainerProviderInfoList Info { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderInfoList">DataAwsEmrcontainersVirtualClusterContainerProviderInfoList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference.property.internalValue"></a>

```csharp
public DataAwsEmrcontainersVirtualClusterContainerProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEmrcontainersVirtualCluster.DataAwsEmrcontainersVirtualClusterContainerProvider">DataAwsEmrcontainersVirtualClusterContainerProvider</a>

---



