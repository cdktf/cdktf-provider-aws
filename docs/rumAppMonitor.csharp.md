# `rumAppMonitor` Submodule <a name="`rumAppMonitor` Submodule" id="@cdktf/provider-aws.rumAppMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumAppMonitor <a name="RumAppMonitor" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor aws_rum_app_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RumAppMonitor(Construct Scope, string Id, RumAppMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig">RumAppMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig">RumAppMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration">PutAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putCustomEvents">PutCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration">ResetAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCustomEvents">ResetCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCwLogEnabled">ResetCwLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAppMonitorConfiguration` <a name="PutAppMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration"></a>

```csharp
private void PutAppMonitorConfiguration(RumAppMonitorAppMonitorConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `PutCustomEvents` <a name="PutCustomEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putCustomEvents"></a>

```csharp
private void PutCustomEvents(RumAppMonitorCustomEvents Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putCustomEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `ResetAppMonitorConfiguration` <a name="ResetAppMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration"></a>

```csharp
private void ResetAppMonitorConfiguration()
```

##### `ResetCustomEvents` <a name="ResetCustomEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCustomEvents"></a>

```csharp
private void ResetCustomEvents()
```

##### `ResetCwLogEnabled` <a name="ResetCwLogEnabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCwLogEnabled"></a>

```csharp
private void ResetCwLogEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RumAppMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RumAppMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RumAppMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration">AppMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorId">AppMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEvents">CustomEvents</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogGroup">CwLogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput">AppMonitorConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEventsInput">CustomEventsInput</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput">CwLogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabled">CwLogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppMonitorConfiguration`<sup>Required</sup> <a name="AppMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration"></a>

```csharp
public RumAppMonitorAppMonitorConfigurationOutputReference AppMonitorConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a>

---

##### `AppMonitorId`<sup>Required</sup> <a name="AppMonitorId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorId"></a>

```csharp
public string AppMonitorId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CustomEvents`<sup>Required</sup> <a name="CustomEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEvents"></a>

```csharp
public RumAppMonitorCustomEventsOutputReference CustomEvents { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a>

---

##### `CwLogGroup`<sup>Required</sup> <a name="CwLogGroup" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogGroup"></a>

```csharp
public string CwLogGroup { get; }
```

- *Type:* string

---

##### `AppMonitorConfigurationInput`<sup>Optional</sup> <a name="AppMonitorConfigurationInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput"></a>

```csharp
public RumAppMonitorAppMonitorConfiguration AppMonitorConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `CustomEventsInput`<sup>Optional</sup> <a name="CustomEventsInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEventsInput"></a>

```csharp
public RumAppMonitorCustomEvents CustomEventsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `CwLogEnabledInput`<sup>Optional</sup> <a name="CwLogEnabledInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput"></a>

```csharp
public object CwLogEnabledInput { get; }
```

- *Type:* object

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CwLogEnabled`<sup>Required</sup> <a name="CwLogEnabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabled"></a>

```csharp
public object CwLogEnabled { get; }
```

- *Type:* object

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RumAppMonitorAppMonitorConfiguration <a name="RumAppMonitorAppMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RumAppMonitorAppMonitorConfiguration {
    object AllowCookies = null,
    object EnableXray = null,
    string[] ExcludedPages = null,
    string[] FavoritePages = null,
    string GuestRoleArn = null,
    string IdentityPoolId = null,
    string[] IncludedPages = null,
    double SessionSampleRate = null,
    string[] Telemetries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies">AllowCookies</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXray">EnableXray</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#enable_xray RumAppMonitor#enable_xray}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages">ExcludedPages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages">FavoritePages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn">GuestRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages">IncludedPages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#included_pages RumAppMonitor#included_pages}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate">SessionSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries">Telemetries</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#telemetries RumAppMonitor#telemetries}. |

---

##### `AllowCookies`<sup>Optional</sup> <a name="AllowCookies" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies"></a>

```csharp
public object AllowCookies { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}.

---

##### `EnableXray`<sup>Optional</sup> <a name="EnableXray" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXray"></a>

```csharp
public object EnableXray { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#enable_xray RumAppMonitor#enable_xray}.

---

##### `ExcludedPages`<sup>Optional</sup> <a name="ExcludedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages"></a>

```csharp
public string[] ExcludedPages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}.

---

##### `FavoritePages`<sup>Optional</sup> <a name="FavoritePages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages"></a>

```csharp
public string[] FavoritePages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}.

---

##### `GuestRoleArn`<sup>Optional</sup> <a name="GuestRoleArn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn"></a>

```csharp
public string GuestRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}.

---

##### `IdentityPoolId`<sup>Optional</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}.

---

##### `IncludedPages`<sup>Optional</sup> <a name="IncludedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages"></a>

```csharp
public string[] IncludedPages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#included_pages RumAppMonitor#included_pages}.

---

##### `SessionSampleRate`<sup>Optional</sup> <a name="SessionSampleRate" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate"></a>

```csharp
public double SessionSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}.

---

##### `Telemetries`<sup>Optional</sup> <a name="Telemetries" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries"></a>

```csharp
public string[] Telemetries { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#telemetries RumAppMonitor#telemetries}.

---

### RumAppMonitorConfig <a name="RumAppMonitorConfig" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RumAppMonitorConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Domain,
    string Name,
    RumAppMonitorAppMonitorConfiguration AppMonitorConfiguration = null,
    RumAppMonitorCustomEvents CustomEvents = null,
    object CwLogEnabled = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#domain RumAppMonitor#domain}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#name RumAppMonitor#name}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration">AppMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | app_monitor_configuration block. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.customEvents">CustomEvents</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | custom_events block. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled">CwLogEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#id RumAppMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags RumAppMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags_all RumAppMonitor#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#domain RumAppMonitor#domain}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#name RumAppMonitor#name}.

---

##### `AppMonitorConfiguration`<sup>Optional</sup> <a name="AppMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration"></a>

```csharp
public RumAppMonitorAppMonitorConfiguration AppMonitorConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

app_monitor_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `CustomEvents`<sup>Optional</sup> <a name="CustomEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.customEvents"></a>

```csharp
public RumAppMonitorCustomEvents CustomEvents { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

custom_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `CwLogEnabled`<sup>Optional</sup> <a name="CwLogEnabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled"></a>

```csharp
public object CwLogEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#id RumAppMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags RumAppMonitor#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags_all RumAppMonitor#tags_all}.

---

### RumAppMonitorCustomEvents <a name="RumAppMonitorCustomEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RumAppMonitorCustomEvents {
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#status RumAppMonitor#status}. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#status RumAppMonitor#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### RumAppMonitorAppMonitorConfigurationOutputReference <a name="RumAppMonitorAppMonitorConfigurationOutputReference" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RumAppMonitorAppMonitorConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies">ResetAllowCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXray">ResetEnableXray</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages">ResetExcludedPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages">ResetFavoritePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn">ResetGuestRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId">ResetIdentityPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages">ResetIncludedPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate">ResetSessionSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries">ResetTelemetries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowCookies` <a name="ResetAllowCookies" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies"></a>

```csharp
private void ResetAllowCookies()
```

##### `ResetEnableXray` <a name="ResetEnableXray" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXray"></a>

```csharp
private void ResetEnableXray()
```

##### `ResetExcludedPages` <a name="ResetExcludedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages"></a>

```csharp
private void ResetExcludedPages()
```

##### `ResetFavoritePages` <a name="ResetFavoritePages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages"></a>

```csharp
private void ResetFavoritePages()
```

##### `ResetGuestRoleArn` <a name="ResetGuestRoleArn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn"></a>

```csharp
private void ResetGuestRoleArn()
```

##### `ResetIdentityPoolId` <a name="ResetIdentityPoolId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId"></a>

```csharp
private void ResetIdentityPoolId()
```

##### `ResetIncludedPages` <a name="ResetIncludedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages"></a>

```csharp
private void ResetIncludedPages()
```

##### `ResetSessionSampleRate` <a name="ResetSessionSampleRate" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate"></a>

```csharp
private void ResetSessionSampleRate()
```

##### `ResetTelemetries` <a name="ResetTelemetries" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries"></a>

```csharp
private void ResetTelemetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput">AllowCookiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXrayInput">EnableXrayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput">ExcludedPagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput">FavoritePagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput">GuestRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput">IncludedPagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput">SessionSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput">TelemetriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies">AllowCookies</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXray">EnableXray</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages">ExcludedPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages">FavoritePages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn">GuestRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages">IncludedPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate">SessionSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries">Telemetries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowCookiesInput`<sup>Optional</sup> <a name="AllowCookiesInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput"></a>

```csharp
public object AllowCookiesInput { get; }
```

- *Type:* object

---

##### `EnableXrayInput`<sup>Optional</sup> <a name="EnableXrayInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXrayInput"></a>

```csharp
public object EnableXrayInput { get; }
```

- *Type:* object

---

##### `ExcludedPagesInput`<sup>Optional</sup> <a name="ExcludedPagesInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput"></a>

```csharp
public string[] ExcludedPagesInput { get; }
```

- *Type:* string[]

---

##### `FavoritePagesInput`<sup>Optional</sup> <a name="FavoritePagesInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput"></a>

```csharp
public string[] FavoritePagesInput { get; }
```

- *Type:* string[]

---

##### `GuestRoleArnInput`<sup>Optional</sup> <a name="GuestRoleArnInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput"></a>

```csharp
public string GuestRoleArnInput { get; }
```

- *Type:* string

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput"></a>

```csharp
public string IdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `IncludedPagesInput`<sup>Optional</sup> <a name="IncludedPagesInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput"></a>

```csharp
public string[] IncludedPagesInput { get; }
```

- *Type:* string[]

---

##### `SessionSampleRateInput`<sup>Optional</sup> <a name="SessionSampleRateInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput"></a>

```csharp
public double SessionSampleRateInput { get; }
```

- *Type:* double

---

##### `TelemetriesInput`<sup>Optional</sup> <a name="TelemetriesInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput"></a>

```csharp
public string[] TelemetriesInput { get; }
```

- *Type:* string[]

---

##### `AllowCookies`<sup>Required</sup> <a name="AllowCookies" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies"></a>

```csharp
public object AllowCookies { get; }
```

- *Type:* object

---

##### `EnableXray`<sup>Required</sup> <a name="EnableXray" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXray"></a>

```csharp
public object EnableXray { get; }
```

- *Type:* object

---

##### `ExcludedPages`<sup>Required</sup> <a name="ExcludedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages"></a>

```csharp
public string[] ExcludedPages { get; }
```

- *Type:* string[]

---

##### `FavoritePages`<sup>Required</sup> <a name="FavoritePages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages"></a>

```csharp
public string[] FavoritePages { get; }
```

- *Type:* string[]

---

##### `GuestRoleArn`<sup>Required</sup> <a name="GuestRoleArn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn"></a>

```csharp
public string GuestRoleArn { get; }
```

- *Type:* string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `IncludedPages`<sup>Required</sup> <a name="IncludedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages"></a>

```csharp
public string[] IncludedPages { get; }
```

- *Type:* string[]

---

##### `SessionSampleRate`<sup>Required</sup> <a name="SessionSampleRate" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate"></a>

```csharp
public double SessionSampleRate { get; }
```

- *Type:* double

---

##### `Telemetries`<sup>Required</sup> <a name="Telemetries" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries"></a>

```csharp
public string[] Telemetries { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue"></a>

```csharp
public RumAppMonitorAppMonitorConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---


### RumAppMonitorCustomEventsOutputReference <a name="RumAppMonitorCustomEventsOutputReference" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RumAppMonitorCustomEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue"></a>

```csharp
public RumAppMonitorCustomEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---



