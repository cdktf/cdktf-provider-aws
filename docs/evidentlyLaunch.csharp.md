# `evidentlyLaunch` Submodule <a name="`evidentlyLaunch` Submodule" id="@cdktf/provider-aws.evidentlyLaunch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyLaunch <a name="EvidentlyLaunch" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch aws_evidently_launch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunch(Construct Scope, string Id, EvidentlyLaunchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig">EvidentlyLaunchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig">EvidentlyLaunchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups">PutGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors">PutMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig">PutScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors">ResetMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt">ResetRandomizationSalt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetScheduledSplitsConfig">ResetScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutGroups` <a name="PutGroups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups"></a>

```csharp
private void PutGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putGroups.parameter.value"></a>

- *Type:* object

---

##### `PutMetricMonitors` <a name="PutMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors"></a>

```csharp
private void PutMetricMonitors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors.parameter.value"></a>

- *Type:* object

---

##### `PutScheduledSplitsConfig` <a name="PutScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig"></a>

```csharp
private void PutScheduledSplitsConfig(EvidentlyLaunchScheduledSplitsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts"></a>

```csharp
private void PutTimeouts(EvidentlyLaunchTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetricMonitors` <a name="ResetMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors"></a>

```csharp
private void ResetMetricMonitors()
```

##### `ResetRandomizationSalt` <a name="ResetRandomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt"></a>

```csharp
private void ResetRandomizationSalt()
```

##### `ResetScheduledSplitsConfig` <a name="ResetScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetScheduledSplitsConfig"></a>

```csharp
private void ResetScheduledSplitsConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EvidentlyLaunch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EvidentlyLaunch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EvidentlyLaunch.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.execution">Execution</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList">EvidentlyLaunchExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groups">Groups</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors">MetricMonitors</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig">ScheduledSplitsConfig</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference">EvidentlyLaunchScheduledSplitsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference">EvidentlyLaunchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groupsInput">GroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput">MetricMonitorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput">RandomizationSaltInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput">ScheduledSplitsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt">RandomizationSalt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Execution`<sup>Required</sup> <a name="Execution" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.execution"></a>

```csharp
public EvidentlyLaunchExecutionList Execution { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList">EvidentlyLaunchExecutionList</a>

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groups"></a>

```csharp
public EvidentlyLaunchGroupsList Groups { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `MetricMonitors`<sup>Required</sup> <a name="MetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors"></a>

```csharp
public EvidentlyLaunchMetricMonitorsList MetricMonitors { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a>

---

##### `ScheduledSplitsConfig`<sup>Required</sup> <a name="ScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig"></a>

```csharp
public EvidentlyLaunchScheduledSplitsConfigOutputReference ScheduledSplitsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference">EvidentlyLaunchScheduledSplitsConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeouts"></a>

```csharp
public EvidentlyLaunchTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference">EvidentlyLaunchTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.groupsInput"></a>

```csharp
public object GroupsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricMonitorsInput`<sup>Optional</sup> <a name="MetricMonitorsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput"></a>

```csharp
public object MetricMonitorsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RandomizationSaltInput`<sup>Optional</sup> <a name="RandomizationSaltInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput"></a>

```csharp
public string RandomizationSaltInput { get; }
```

- *Type:* string

---

##### `ScheduledSplitsConfigInput`<sup>Optional</sup> <a name="ScheduledSplitsConfigInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput"></a>

```csharp
public EvidentlyLaunchScheduledSplitsConfig ScheduledSplitsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RandomizationSalt`<sup>Required</sup> <a name="RandomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt"></a>

```csharp
public string RandomizationSalt { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyLaunchConfig <a name="EvidentlyLaunchConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Groups,
    string Name,
    string Project,
    string Description = null,
    string Id = null,
    object MetricMonitors = null,
    string RandomizationSalt = null,
    EvidentlyLaunchScheduledSplitsConfig ScheduledSplitsConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    EvidentlyLaunchTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.groups">Groups</a></code> | <code>object</code> | groups block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors">MetricMonitors</a></code> | <code>object</code> | metric_monitors block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt">RandomizationSalt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig">ScheduledSplitsConfig</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | scheduled_splits_config block. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.groups"></a>

```csharp
public object Groups { get; set; }
```

- *Type:* object

groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#groups EvidentlyLaunch#groups}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#project EvidentlyLaunch#project}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#id EvidentlyLaunch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetricMonitors`<sup>Optional</sup> <a name="MetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors"></a>

```csharp
public object MetricMonitors { get; set; }
```

- *Type:* object

metric_monitors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}

---

##### `RandomizationSalt`<sup>Optional</sup> <a name="RandomizationSalt" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt"></a>

```csharp
public string RandomizationSalt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `ScheduledSplitsConfig`<sup>Optional</sup> <a name="ScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig"></a>

```csharp
public EvidentlyLaunchScheduledSplitsConfig ScheduledSplitsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

scheduled_splits_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags EvidentlyLaunch#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#tags_all EvidentlyLaunch#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchConfig.property.timeouts"></a>

```csharp
public EvidentlyLaunchTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts">EvidentlyLaunchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#timeouts EvidentlyLaunch#timeouts}

---

### EvidentlyLaunchExecution <a name="EvidentlyLaunchExecution" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchExecution {

};
```


### EvidentlyLaunchGroups <a name="EvidentlyLaunchGroups" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchGroups {
    string Feature,
    string Name,
    string Variation,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.feature">Feature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.variation">Variation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}. |

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.feature"></a>

```csharp
public string Feature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#feature EvidentlyLaunch#feature}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.variation"></a>

```csharp
public string Variation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#variation EvidentlyLaunch#variation}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroups.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#description EvidentlyLaunch#description}.

---

### EvidentlyLaunchMetricMonitors <a name="EvidentlyLaunchMetricMonitors" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchMetricMonitors {
    EvidentlyLaunchMetricMonitorsMetricDefinition MetricDefinition
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricDefinition">MetricDefinition</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | metric_definition block. |

---

##### `MetricDefinition`<sup>Required</sup> <a name="MetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricDefinition"></a>

```csharp
public EvidentlyLaunchMetricMonitorsMetricDefinition MetricDefinition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

metric_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#metric_definition EvidentlyLaunch#metric_definition}

---

### EvidentlyLaunchMetricMonitorsMetricDefinition <a name="EvidentlyLaunchMetricMonitorsMetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchMetricMonitorsMetricDefinition {
    string EntityIdKey,
    string Name,
    string ValueKey,
    string EventPattern = null,
    string UnitLabel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.entityIdKey">EntityIdKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.valueKey">ValueKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.eventPattern">EventPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.unitLabel">UnitLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}. |

---

##### `EntityIdKey`<sup>Required</sup> <a name="EntityIdKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.entityIdKey"></a>

```csharp
public string EntityIdKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#name EvidentlyLaunch#name}.

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.valueKey"></a>

```csharp
public string ValueKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#value_key EvidentlyLaunch#value_key}.

---

##### `EventPattern`<sup>Optional</sup> <a name="EventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.eventPattern"></a>

```csharp
public string EventPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}.

---

##### `UnitLabel`<sup>Optional</sup> <a name="UnitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition.property.unitLabel"></a>

```csharp
public string UnitLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#unit_label EvidentlyLaunch#unit_label}.

---

### EvidentlyLaunchScheduledSplitsConfig <a name="EvidentlyLaunchScheduledSplitsConfig" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchScheduledSplitsConfig {
    object Steps
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.steps">Steps</a></code> | <code>object</code> | steps block. |

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.steps"></a>

```csharp
public object Steps { get; set; }
```

- *Type:* object

steps block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#steps EvidentlyLaunch#steps}

---

### EvidentlyLaunchScheduledSplitsConfigSteps <a name="EvidentlyLaunchScheduledSplitsConfigSteps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchScheduledSplitsConfigSteps {
    System.Collections.Generic.IDictionary<string, double> GroupWeights,
    string StartTime,
    object SegmentOverrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.groupWeights">GroupWeights</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.segmentOverrides">SegmentOverrides</a></code> | <code>object</code> | segment_overrides block. |

---

##### `GroupWeights`<sup>Required</sup> <a name="GroupWeights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.groupWeights"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> GroupWeights { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#group_weights EvidentlyLaunch#group_weights}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#start_time EvidentlyLaunch#start_time}.

---

##### `SegmentOverrides`<sup>Optional</sup> <a name="SegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSteps.property.segmentOverrides"></a>

```csharp
public object SegmentOverrides { get; set; }
```

- *Type:* object

segment_overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}

---

### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides {
    double EvaluationOrder,
    string Segment,
    System.Collections.Generic.IDictionary<string, double> Weights
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.evaluationOrder">EvaluationOrder</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.segment">Segment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.weights">Weights</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}. |

---

##### `EvaluationOrder`<sup>Required</sup> <a name="EvaluationOrder" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.evaluationOrder"></a>

```csharp
public double EvaluationOrder { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}.

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.segment"></a>

```csharp
public string Segment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#segment EvidentlyLaunch#segment}.

---

##### `Weights`<sup>Required</sup> <a name="Weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides.property.weights"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> Weights { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#weights EvidentlyLaunch#weights}.

---

### EvidentlyLaunchTimeouts <a name="EvidentlyLaunchTimeouts" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#create EvidentlyLaunch#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#delete EvidentlyLaunch#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_launch#update EvidentlyLaunch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyLaunchExecutionList <a name="EvidentlyLaunchExecutionList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchExecutionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get"></a>

```csharp
private EvidentlyLaunchExecutionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EvidentlyLaunchExecutionOutputReference <a name="EvidentlyLaunchExecutionOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchExecutionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.endedTime">EndedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.startedTime">StartedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution">EvidentlyLaunchExecution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndedTime`<sup>Required</sup> <a name="EndedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.endedTime"></a>

```csharp
public string EndedTime { get; }
```

- *Type:* string

---

##### `StartedTime`<sup>Required</sup> <a name="StartedTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.startedTime"></a>

```csharp
public string StartedTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecutionOutputReference.property.internalValue"></a>

```csharp
public EvidentlyLaunchExecution InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchExecution">EvidentlyLaunchExecution</a>

---


### EvidentlyLaunchGroupsList <a name="EvidentlyLaunchGroupsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get"></a>

```csharp
private EvidentlyLaunchGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EvidentlyLaunchGroupsOutputReference <a name="EvidentlyLaunchGroupsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput">FeatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput">VariationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature">Feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation">Variation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput"></a>

```csharp
public string FeatureInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput"></a>

```csharp
public string VariationInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature"></a>

```csharp
public string Feature { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation"></a>

```csharp
public string Variation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EvidentlyLaunchMetricMonitorsList <a name="EvidentlyLaunchMetricMonitorsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchMetricMonitorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get"></a>

```csharp
private EvidentlyLaunchMetricMonitorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference <a name="EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetEventPattern">ResetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetUnitLabel">ResetUnitLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventPattern` <a name="ResetEventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetEventPattern"></a>

```csharp
private void ResetEventPattern()
```

##### `ResetUnitLabel` <a name="ResetUnitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.resetUnitLabel"></a>

```csharp
private void ResetUnitLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKeyInput">EntityIdKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPatternInput">EventPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabelInput">UnitLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKeyInput">ValueKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKey">EntityIdKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPattern">EventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabel">UnitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKey">ValueKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityIdKeyInput`<sup>Optional</sup> <a name="EntityIdKeyInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKeyInput"></a>

```csharp
public string EntityIdKeyInput { get; }
```

- *Type:* string

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPatternInput"></a>

```csharp
public string EventPatternInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UnitLabelInput`<sup>Optional</sup> <a name="UnitLabelInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabelInput"></a>

```csharp
public string UnitLabelInput { get; }
```

- *Type:* string

---

##### `ValueKeyInput`<sup>Optional</sup> <a name="ValueKeyInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKeyInput"></a>

```csharp
public string ValueKeyInput { get; }
```

- *Type:* string

---

##### `EntityIdKey`<sup>Required</sup> <a name="EntityIdKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.entityIdKey"></a>

```csharp
public string EntityIdKey { get; }
```

- *Type:* string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.eventPattern"></a>

```csharp
public string EventPattern { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UnitLabel`<sup>Required</sup> <a name="UnitLabel" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.unitLabel"></a>

```csharp
public string UnitLabel { get; }
```

- *Type:* string

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.valueKey"></a>

```csharp
public string ValueKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference.property.internalValue"></a>

```csharp
public EvidentlyLaunchMetricMonitorsMetricDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---


### EvidentlyLaunchMetricMonitorsOutputReference <a name="EvidentlyLaunchMetricMonitorsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchMetricMonitorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition">PutMetricDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricDefinition` <a name="PutMetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition"></a>

```csharp
private void PutMetricDefinition(EvidentlyLaunchMetricMonitorsMetricDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.putMetricDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinition">MetricDefinition</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference">EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinitionInput">MetricDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricDefinition`<sup>Required</sup> <a name="MetricDefinition" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinition"></a>

```csharp
public EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference MetricDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference">EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference</a>

---

##### `MetricDefinitionInput`<sup>Optional</sup> <a name="MetricDefinitionInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricDefinitionInput"></a>

```csharp
public EvidentlyLaunchMetricMonitorsMetricDefinition MetricDefinitionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsMetricDefinition">EvidentlyLaunchMetricMonitorsMetricDefinition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EvidentlyLaunchScheduledSplitsConfigOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchScheduledSplitsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps">PutSteps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps"></a>

```csharp
private void PutSteps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSteps.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList">EvidentlyLaunchScheduledSplitsConfigStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.stepsInput">StepsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.steps"></a>

```csharp
public EvidentlyLaunchScheduledSplitsConfigStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList">EvidentlyLaunchScheduledSplitsConfigStepsList</a>

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.stepsInput"></a>

```csharp
public object StepsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue"></a>

```csharp
public EvidentlyLaunchScheduledSplitsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---


### EvidentlyLaunchScheduledSplitsConfigStepsList <a name="EvidentlyLaunchScheduledSplitsConfigStepsList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchScheduledSplitsConfigStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get"></a>

```csharp
private EvidentlyLaunchScheduledSplitsConfigStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EvidentlyLaunchScheduledSplitsConfigStepsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigStepsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchScheduledSplitsConfigStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides">PutSegmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resetSegmentOverrides">ResetSegmentOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSegmentOverrides` <a name="PutSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides"></a>

```csharp
private void PutSegmentOverrides(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.putSegmentOverrides.parameter.value"></a>

- *Type:* object

---

##### `ResetSegmentOverrides` <a name="ResetSegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.resetSegmentOverrides"></a>

```csharp
private void ResetSegmentOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverrides">SegmentOverrides</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeightsInput">GroupWeightsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverridesInput">SegmentOverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeights">GroupWeights</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentOverrides`<sup>Required</sup> <a name="SegmentOverrides" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverrides"></a>

```csharp
public EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList SegmentOverrides { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList</a>

---

##### `GroupWeightsInput`<sup>Optional</sup> <a name="GroupWeightsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeightsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> GroupWeightsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `SegmentOverridesInput`<sup>Optional</sup> <a name="SegmentOverridesInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.segmentOverridesInput"></a>

```csharp
public object SegmentOverridesInput { get; }
```

- *Type:* object

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `GroupWeights`<sup>Required</sup> <a name="GroupWeights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.groupWeights"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> GroupWeights { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get"></a>

```csharp
private EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrderInput">EvaluationOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segmentInput">SegmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weightsInput">WeightsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrder">EvaluationOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segment">Segment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weights">Weights</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluationOrderInput`<sup>Optional</sup> <a name="EvaluationOrderInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrderInput"></a>

```csharp
public double EvaluationOrderInput { get; }
```

- *Type:* double

---

##### `SegmentInput`<sup>Optional</sup> <a name="SegmentInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segmentInput"></a>

```csharp
public string SegmentInput { get; }
```

- *Type:* string

---

##### `WeightsInput`<sup>Optional</sup> <a name="WeightsInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weightsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> WeightsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `EvaluationOrder`<sup>Required</sup> <a name="EvaluationOrder" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.evaluationOrder"></a>

```csharp
public double EvaluationOrder { get; }
```

- *Type:* double

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.segment"></a>

```csharp
public string Segment { get; }
```

- *Type:* string

---

##### `Weights`<sup>Required</sup> <a name="Weights" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.weights"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> Weights { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EvidentlyLaunchTimeoutsOutputReference <a name="EvidentlyLaunchTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EvidentlyLaunchTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyLaunch.EvidentlyLaunchTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



