# `dataAwsCodeguruprofilerProfilingGroup` Submodule <a name="`dataAwsCodeguruprofilerProfilingGroup` Submodule" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodeguruprofilerProfilingGroup <a name="DataAwsCodeguruprofilerProfilingGroup" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/data-sources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroup(Construct Scope, string Id, DataAwsCodeguruprofilerProfilingGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig">DataAwsCodeguruprofilerProfilingGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig">DataAwsCodeguruprofilerProfilingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodeguruprofilerProfilingGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodeguruprofilerProfilingGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodeguruprofilerProfilingGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsCodeguruprofilerProfilingGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsCodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCodeguruprofilerProfilingGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/data-sources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.agentOrchestrationConfig">AgentOrchestrationConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList">DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.computePlatform">ComputePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.profilingStatus">ProfilingStatus</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList">DataAwsCodeguruprofilerProfilingGroupProfilingStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AgentOrchestrationConfig`<sup>Required</sup> <a name="AgentOrchestrationConfig" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.agentOrchestrationConfig"></a>

```csharp
public DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList AgentOrchestrationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList">DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComputePlatform`<sup>Required</sup> <a name="ComputePlatform" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.computePlatform"></a>

```csharp
public string ComputePlatform { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProfilingStatus`<sup>Required</sup> <a name="ProfilingStatus" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.profilingStatus"></a>

```csharp
public DataAwsCodeguruprofilerProfilingGroupProfilingStatusList ProfilingStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList">DataAwsCodeguruprofilerProfilingGroupProfilingStatusList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig <a name="DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig {

};
```


### DataAwsCodeguruprofilerProfilingGroupConfig <a name="DataAwsCodeguruprofilerProfilingGroupConfig" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/data-sources/codeguruprofiler_profiling_group#name DataAwsCodeguruprofilerProfilingGroup#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/data-sources/codeguruprofiler_profiling_group#name DataAwsCodeguruprofilerProfilingGroup#name}.

---

### DataAwsCodeguruprofilerProfilingGroupProfilingStatus <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatus" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroupProfilingStatus {

};
```


### DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList <a name="DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get"></a>

```csharp
private DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference <a name="DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabled">ProfilingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig">DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProfilingEnabled`<sup>Required</sup> <a name="ProfilingEnabled" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabled"></a>

```csharp
public IResolvable ProfilingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig">DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>

---


### DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.get"></a>

```csharp
private DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile">DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.internalValue"></a>

```csharp
public DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile">DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile</a>

---


### DataAwsCodeguruprofilerProfilingGroupProfilingStatusList <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatusList" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroupProfilingStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.get"></a>

```csharp
private DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAgentOrchestratedAt">LatestAgentOrchestratedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAgentProfileReportedAt">LatestAgentProfileReportedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAggregatedProfile">LatestAggregatedProfile</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList">DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatus">DataAwsCodeguruprofilerProfilingGroupProfilingStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LatestAgentOrchestratedAt`<sup>Required</sup> <a name="LatestAgentOrchestratedAt" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAgentOrchestratedAt"></a>

```csharp
public string LatestAgentOrchestratedAt { get; }
```

- *Type:* string

---

##### `LatestAgentProfileReportedAt`<sup>Required</sup> <a name="LatestAgentProfileReportedAt" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAgentProfileReportedAt"></a>

```csharp
public string LatestAgentProfileReportedAt { get; }
```

- *Type:* string

---

##### `LatestAggregatedProfile`<sup>Required</sup> <a name="LatestAggregatedProfile" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAggregatedProfile"></a>

```csharp
public DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList LatestAggregatedProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList">DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.internalValue"></a>

```csharp
public DataAwsCodeguruprofilerProfilingGroupProfilingStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatus">DataAwsCodeguruprofilerProfilingGroupProfilingStatus</a>

---



