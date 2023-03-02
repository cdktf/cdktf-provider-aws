# `ceAnomalyMonitor` Submodule <a name="`ceAnomalyMonitor` Submodule" id="@cdktf/provider-aws.ceAnomalyMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalyMonitor <a name="CeAnomalyMonitor" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor aws_ce_anomaly_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CeAnomalyMonitor(Construct Scope, string Id, CeAnomalyMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig">CeAnomalyMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig">CeAnomalyMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension">ResetMonitorDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification">ResetMonitorSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMonitorDimension` <a name="ResetMonitorDimension" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension"></a>

```csharp
private void ResetMonitorDimension()
```

##### `ResetMonitorSpecification` <a name="ResetMonitorSpecification" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification"></a>

```csharp
private void ResetMonitorSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CeAnomalyMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CeAnomalyMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CeAnomalyMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput">MonitorDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput">MonitorSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput">MonitorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension">MonitorDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification">MonitorSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType">MonitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MonitorDimensionInput`<sup>Optional</sup> <a name="MonitorDimensionInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput"></a>

```csharp
public string MonitorDimensionInput { get; }
```

- *Type:* string

---

##### `MonitorSpecificationInput`<sup>Optional</sup> <a name="MonitorSpecificationInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput"></a>

```csharp
public string MonitorSpecificationInput { get; }
```

- *Type:* string

---

##### `MonitorTypeInput`<sup>Optional</sup> <a name="MonitorTypeInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput"></a>

```csharp
public string MonitorTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MonitorDimension`<sup>Required</sup> <a name="MonitorDimension" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension"></a>

```csharp
public string MonitorDimension { get; }
```

- *Type:* string

---

##### `MonitorSpecification`<sup>Required</sup> <a name="MonitorSpecification" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification"></a>

```csharp
public string MonitorSpecification { get; }
```

- *Type:* string

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType"></a>

```csharp
public string MonitorType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalyMonitorConfig <a name="CeAnomalyMonitorConfig" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CeAnomalyMonitorConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MonitorType,
    string Name,
    string Id = null,
    string MonitorDimension = null,
    string MonitorSpecification = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType">MonitorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#name CeAnomalyMonitor#name}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#id CeAnomalyMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension">MonitorDimension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification">MonitorSpecification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags CeAnomalyMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags_all CeAnomalyMonitor#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType"></a>

```csharp
public string MonitorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#name CeAnomalyMonitor#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#id CeAnomalyMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonitorDimension`<sup>Optional</sup> <a name="MonitorDimension" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension"></a>

```csharp
public string MonitorDimension { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}.

---

##### `MonitorSpecification`<sup>Optional</sup> <a name="MonitorSpecification" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification"></a>

```csharp
public string MonitorSpecification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags CeAnomalyMonitor#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags_all CeAnomalyMonitor#tags_all}.

---



