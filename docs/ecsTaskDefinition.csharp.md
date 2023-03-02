# `ecsTaskDefinition` Submodule <a name="`ecsTaskDefinition` Submodule" id="@cdktf/provider-aws.ecsTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsTaskDefinition <a name="EcsTaskDefinition" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition aws_ecs_task_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinition(Construct Scope, string Id, EcsTaskDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig">EcsTaskDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig">EcsTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage">PutEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator">PutInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints">PutPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration">PutProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform">PutRuntimePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetInferenceAccelerator">ResetInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetIpcMode">ResetIpcMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetNetworkMode">ResetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPidMode">ResetPidMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPlacementConstraints">ResetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetProxyConfiguration">ResetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRequiresCompatibilities">ResetRequiresCompatibilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRuntimePlatform">ResetRuntimePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetSkipDestroy">ResetSkipDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTaskRoleArn">ResetTaskRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEphemeralStorage` <a name="PutEphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage"></a>

```csharp
private void PutEphemeralStorage(EcsTaskDefinitionEphemeralStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putEphemeralStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---

##### `PutInferenceAccelerator` <a name="PutInferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator"></a>

```csharp
private void PutInferenceAccelerator(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putInferenceAccelerator.parameter.value"></a>

- *Type:* object

---

##### `PutPlacementConstraints` <a name="PutPlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints"></a>

```csharp
private void PutPlacementConstraints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putPlacementConstraints.parameter.value"></a>

- *Type:* object

---

##### `PutProxyConfiguration` <a name="PutProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration"></a>

```csharp
private void PutProxyConfiguration(EcsTaskDefinitionProxyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putProxyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---

##### `PutRuntimePlatform` <a name="PutRuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform"></a>

```csharp
private void PutRuntimePlatform(EcsTaskDefinitionRuntimePlatform Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putRuntimePlatform.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume"></a>

```csharp
private void PutVolume(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.putVolume.parameter.value"></a>

- *Type:* object

---

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetEphemeralStorage"></a>

```csharp
private void ResetEphemeralStorage()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInferenceAccelerator` <a name="ResetInferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetInferenceAccelerator"></a>

```csharp
private void ResetInferenceAccelerator()
```

##### `ResetIpcMode` <a name="ResetIpcMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetIpcMode"></a>

```csharp
private void ResetIpcMode()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetNetworkMode` <a name="ResetNetworkMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetNetworkMode"></a>

```csharp
private void ResetNetworkMode()
```

##### `ResetPidMode` <a name="ResetPidMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPidMode"></a>

```csharp
private void ResetPidMode()
```

##### `ResetPlacementConstraints` <a name="ResetPlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetPlacementConstraints"></a>

```csharp
private void ResetPlacementConstraints()
```

##### `ResetProxyConfiguration` <a name="ResetProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetProxyConfiguration"></a>

```csharp
private void ResetProxyConfiguration()
```

##### `ResetRequiresCompatibilities` <a name="ResetRequiresCompatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRequiresCompatibilities"></a>

```csharp
private void ResetRequiresCompatibilities()
```

##### `ResetRuntimePlatform` <a name="ResetRuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetRuntimePlatform"></a>

```csharp
private void ResetRuntimePlatform()
```

##### `ResetSkipDestroy` <a name="ResetSkipDestroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetSkipDestroy"></a>

```csharp
private void ResetSkipDestroy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTaskRoleArn` <a name="ResetTaskRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetTaskRoleArn"></a>

```csharp
private void ResetTaskRoleArn()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.resetVolume"></a>

```csharp
private void ResetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcsTaskDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcsTaskDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcsTaskDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorage">EphemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference">EcsTaskDefinitionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAccelerator">InferenceAccelerator</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList">EcsTaskDefinitionInferenceAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraints">PlacementConstraints</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList">EcsTaskDefinitionPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfiguration">ProxyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference">EcsTaskDefinitionProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatform">RuntimePlatform</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference">EcsTaskDefinitionRuntimePlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList">EcsTaskDefinitionVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitionsInput">ContainerDefinitionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpuInput">CpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAcceleratorInput">InferenceAcceleratorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcModeInput">IpcModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkModeInput">NetworkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidModeInput">PidModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraintsInput">PlacementConstraintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfigurationInput">ProxyConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilitiesInput">RequiresCompatibilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatformInput">RuntimePlatformInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroyInput">SkipDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArnInput">TaskRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volumeInput">VolumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitions">ContainerDefinitions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcMode">IpcMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkMode">NetworkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidMode">PidMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilities">RequiresCompatibilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroy">SkipDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArn">TaskRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorage"></a>

```csharp
public EcsTaskDefinitionEphemeralStorageOutputReference EphemeralStorage { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference">EcsTaskDefinitionEphemeralStorageOutputReference</a>

---

##### `InferenceAccelerator`<sup>Required</sup> <a name="InferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAccelerator"></a>

```csharp
public EcsTaskDefinitionInferenceAcceleratorList InferenceAccelerator { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList">EcsTaskDefinitionInferenceAcceleratorList</a>

---

##### `PlacementConstraints`<sup>Required</sup> <a name="PlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraints"></a>

```csharp
public EcsTaskDefinitionPlacementConstraintsList PlacementConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList">EcsTaskDefinitionPlacementConstraintsList</a>

---

##### `ProxyConfiguration`<sup>Required</sup> <a name="ProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfiguration"></a>

```csharp
public EcsTaskDefinitionProxyConfigurationOutputReference ProxyConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference">EcsTaskDefinitionProxyConfigurationOutputReference</a>

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `RuntimePlatform`<sup>Required</sup> <a name="RuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatform"></a>

```csharp
public EcsTaskDefinitionRuntimePlatformOutputReference RuntimePlatform { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference">EcsTaskDefinitionRuntimePlatformOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volume"></a>

```csharp
public EcsTaskDefinitionVolumeList Volume { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList">EcsTaskDefinitionVolumeList</a>

---

##### `ContainerDefinitionsInput`<sup>Optional</sup> <a name="ContainerDefinitionsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitionsInput"></a>

```csharp
public string ContainerDefinitionsInput { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpuInput"></a>

```csharp
public string CpuInput { get; }
```

- *Type:* string

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ephemeralStorageInput"></a>

```csharp
public EcsTaskDefinitionEphemeralStorage EphemeralStorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InferenceAcceleratorInput`<sup>Optional</sup> <a name="InferenceAcceleratorInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.inferenceAcceleratorInput"></a>

```csharp
public object InferenceAcceleratorInput { get; }
```

- *Type:* object

---

##### `IpcModeInput`<sup>Optional</sup> <a name="IpcModeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcModeInput"></a>

```csharp
public string IpcModeInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkModeInput"></a>

```csharp
public string NetworkModeInput { get; }
```

- *Type:* string

---

##### `PidModeInput`<sup>Optional</sup> <a name="PidModeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidModeInput"></a>

```csharp
public string PidModeInput { get; }
```

- *Type:* string

---

##### `PlacementConstraintsInput`<sup>Optional</sup> <a name="PlacementConstraintsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.placementConstraintsInput"></a>

```csharp
public object PlacementConstraintsInput { get; }
```

- *Type:* object

---

##### `ProxyConfigurationInput`<sup>Optional</sup> <a name="ProxyConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.proxyConfigurationInput"></a>

```csharp
public EcsTaskDefinitionProxyConfiguration ProxyConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---

##### `RequiresCompatibilitiesInput`<sup>Optional</sup> <a name="RequiresCompatibilitiesInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilitiesInput"></a>

```csharp
public string[] RequiresCompatibilitiesInput { get; }
```

- *Type:* string[]

---

##### `RuntimePlatformInput`<sup>Optional</sup> <a name="RuntimePlatformInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.runtimePlatformInput"></a>

```csharp
public EcsTaskDefinitionRuntimePlatform RuntimePlatformInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---

##### `SkipDestroyInput`<sup>Optional</sup> <a name="SkipDestroyInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroyInput"></a>

```csharp
public object SkipDestroyInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskRoleArnInput`<sup>Optional</sup> <a name="TaskRoleArnInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArnInput"></a>

```csharp
public string TaskRoleArnInput { get; }
```

- *Type:* string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.volumeInput"></a>

```csharp
public object VolumeInput { get; }
```

- *Type:* object

---

##### `ContainerDefinitions`<sup>Required</sup> <a name="ContainerDefinitions" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.containerDefinitions"></a>

```csharp
public string ContainerDefinitions { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpcMode`<sup>Required</sup> <a name="IpcMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.ipcMode"></a>

```csharp
public string IpcMode { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.networkMode"></a>

```csharp
public string NetworkMode { get; }
```

- *Type:* string

---

##### `PidMode`<sup>Required</sup> <a name="PidMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.pidMode"></a>

```csharp
public string PidMode { get; }
```

- *Type:* string

---

##### `RequiresCompatibilities`<sup>Required</sup> <a name="RequiresCompatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.requiresCompatibilities"></a>

```csharp
public string[] RequiresCompatibilities { get; }
```

- *Type:* string[]

---

##### `SkipDestroy`<sup>Required</sup> <a name="SkipDestroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.skipDestroy"></a>

```csharp
public object SkipDestroy { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskRoleArn`<sup>Required</sup> <a name="TaskRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.taskRoleArn"></a>

```csharp
public string TaskRoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsTaskDefinitionConfig <a name="EcsTaskDefinitionConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerDefinitions,
    string Family,
    string Cpu = null,
    EcsTaskDefinitionEphemeralStorage EphemeralStorage = null,
    string ExecutionRoleArn = null,
    string Id = null,
    object InferenceAccelerator = null,
    string IpcMode = null,
    string Memory = null,
    string NetworkMode = null,
    string PidMode = null,
    object PlacementConstraints = null,
    EcsTaskDefinitionProxyConfiguration ProxyConfiguration = null,
    string[] RequiresCompatibilities = null,
    EcsTaskDefinitionRuntimePlatform RuntimePlatform = null,
    object SkipDestroy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TaskRoleArn = null,
    object Volume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.containerDefinitions">ContainerDefinitions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.family">Family</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#family EcsTaskDefinition#family}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.cpu">Cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu EcsTaskDefinition#cpu}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ephemeralStorage">EphemeralStorage</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#id EcsTaskDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.inferenceAccelerator">InferenceAccelerator</a></code> | <code>object</code> | inference_accelerator block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ipcMode">IpcMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.memory">Memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#memory EcsTaskDefinition#memory}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.networkMode">NetworkMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.pidMode">PidMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.placementConstraints">PlacementConstraints</a></code> | <code>object</code> | placement_constraints block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.proxyConfiguration">ProxyConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | proxy_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.requiresCompatibilities">RequiresCompatibilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.runtimePlatform">RuntimePlatform</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | runtime_platform block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.skipDestroy">SkipDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags EcsTaskDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.taskRoleArn">TaskRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.volume">Volume</a></code> | <code>object</code> | volume block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerDefinitions`<sup>Required</sup> <a name="ContainerDefinitions" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.containerDefinitions"></a>

```csharp
public string ContainerDefinitions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}.

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#family EcsTaskDefinition#family}.

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.cpu"></a>

```csharp
public string Cpu { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu EcsTaskDefinition#cpu}.

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ephemeralStorage"></a>

```csharp
public EcsTaskDefinitionEphemeralStorage EphemeralStorage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

ephemeral_storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ephemeral_storage EcsTaskDefinition#ephemeral_storage}

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#id EcsTaskDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferenceAccelerator`<sup>Optional</sup> <a name="InferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.inferenceAccelerator"></a>

```csharp
public object InferenceAccelerator { get; set; }
```

- *Type:* object

inference_accelerator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#inference_accelerator EcsTaskDefinition#inference_accelerator}

---

##### `IpcMode`<sup>Optional</sup> <a name="IpcMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.ipcMode"></a>

```csharp
public string IpcMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#memory EcsTaskDefinition#memory}.

---

##### `NetworkMode`<sup>Optional</sup> <a name="NetworkMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.networkMode"></a>

```csharp
public string NetworkMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}.

---

##### `PidMode`<sup>Optional</sup> <a name="PidMode" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.pidMode"></a>

```csharp
public string PidMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}.

---

##### `PlacementConstraints`<sup>Optional</sup> <a name="PlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.placementConstraints"></a>

```csharp
public object PlacementConstraints { get; set; }
```

- *Type:* object

placement_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#placement_constraints EcsTaskDefinition#placement_constraints}

---

##### `ProxyConfiguration`<sup>Optional</sup> <a name="ProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.proxyConfiguration"></a>

```csharp
public EcsTaskDefinitionProxyConfiguration ProxyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

proxy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#proxy_configuration EcsTaskDefinition#proxy_configuration}

---

##### `RequiresCompatibilities`<sup>Optional</sup> <a name="RequiresCompatibilities" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.requiresCompatibilities"></a>

```csharp
public string[] RequiresCompatibilities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}.

---

##### `RuntimePlatform`<sup>Optional</sup> <a name="RuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.runtimePlatform"></a>

```csharp
public EcsTaskDefinitionRuntimePlatform RuntimePlatform { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

runtime_platform block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#runtime_platform EcsTaskDefinition#runtime_platform}

---

##### `SkipDestroy`<sup>Optional</sup> <a name="SkipDestroy" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.skipDestroy"></a>

```csharp
public object SkipDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags EcsTaskDefinition#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}.

---

##### `TaskRoleArn`<sup>Optional</sup> <a name="TaskRoleArn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.taskRoleArn"></a>

```csharp
public string TaskRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}.

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionConfig.property.volume"></a>

```csharp
public object Volume { get; set; }
```

- *Type:* object

volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#volume EcsTaskDefinition#volume}

---

### EcsTaskDefinitionEphemeralStorage <a name="EcsTaskDefinitionEphemeralStorage" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionEphemeralStorage {
    double SizeInGib
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.property.sizeInGib">SizeInGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}. |

---

##### `SizeInGib`<sup>Required</sup> <a name="SizeInGib" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage.property.sizeInGib"></a>

```csharp
public double SizeInGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}.

---

### EcsTaskDefinitionInferenceAccelerator <a name="EcsTaskDefinitionInferenceAccelerator" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionInferenceAccelerator {
    string DeviceName,
    string DeviceType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_name EcsTaskDefinition#device_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceType">DeviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_type EcsTaskDefinition#device_type}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_name EcsTaskDefinition#device_name}.

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAccelerator.property.deviceType"></a>

```csharp
public string DeviceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#device_type EcsTaskDefinition#device_type}.

---

### EcsTaskDefinitionPlacementConstraints <a name="EcsTaskDefinitionPlacementConstraints" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionPlacementConstraints {
    string Type,
    string Expression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#expression EcsTaskDefinition#expression}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraints.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#expression EcsTaskDefinition#expression}.

---

### EcsTaskDefinitionProxyConfiguration <a name="EcsTaskDefinitionProxyConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionProxyConfiguration {
    string ContainerName,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_name EcsTaskDefinition#container_name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#properties EcsTaskDefinition#properties}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}. |

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#container_name EcsTaskDefinition#container_name}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#properties EcsTaskDefinition#properties}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#type EcsTaskDefinition#type}.

---

### EcsTaskDefinitionRuntimePlatform <a name="EcsTaskDefinitionRuntimePlatform" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionRuntimePlatform {
    string CpuArchitecture = null,
    string OperatingSystemFamily = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.cpuArchitecture">CpuArchitecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.operatingSystemFamily">OperatingSystemFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}. |

---

##### `CpuArchitecture`<sup>Optional</sup> <a name="CpuArchitecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.cpuArchitecture"></a>

```csharp
public string CpuArchitecture { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}.

---

##### `OperatingSystemFamily`<sup>Optional</sup> <a name="OperatingSystemFamily" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform.property.operatingSystemFamily"></a>

```csharp
public string OperatingSystemFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}.

---

### EcsTaskDefinitionVolume <a name="EcsTaskDefinitionVolume" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolume {
    string Name,
    EcsTaskDefinitionVolumeDockerVolumeConfiguration DockerVolumeConfiguration = null,
    EcsTaskDefinitionVolumeEfsVolumeConfiguration EfsVolumeConfiguration = null,
    EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration FsxWindowsFileServerVolumeConfiguration = null,
    string HostPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#name EcsTaskDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.dockerVolumeConfiguration">DockerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | docker_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.efsVolumeConfiguration">EfsVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | efs_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.fsxWindowsFileServerVolumeConfiguration">FsxWindowsFileServerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | fsx_windows_file_server_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.hostPath">HostPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#host_path EcsTaskDefinition#host_path}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#name EcsTaskDefinition#name}.

---

##### `DockerVolumeConfiguration`<sup>Optional</sup> <a name="DockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.dockerVolumeConfiguration"></a>

```csharp
public EcsTaskDefinitionVolumeDockerVolumeConfiguration DockerVolumeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

docker_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}

---

##### `EfsVolumeConfiguration`<sup>Optional</sup> <a name="EfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.efsVolumeConfiguration"></a>

```csharp
public EcsTaskDefinitionVolumeEfsVolumeConfiguration EfsVolumeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

efs_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}

---

##### `FsxWindowsFileServerVolumeConfiguration`<sup>Optional</sup> <a name="FsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.fsxWindowsFileServerVolumeConfiguration"></a>

```csharp
public EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration FsxWindowsFileServerVolumeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

fsx_windows_file_server_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}

---

##### `HostPath`<sup>Optional</sup> <a name="HostPath" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolume.property.hostPath"></a>

```csharp
public string HostPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#host_path EcsTaskDefinition#host_path}.

---

### EcsTaskDefinitionVolumeDockerVolumeConfiguration <a name="EcsTaskDefinitionVolumeDockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeDockerVolumeConfiguration {
    object Autoprovision = null,
    string Driver = null,
    System.Collections.Generic.IDictionary<string, string> DriverOpts = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.autoprovision">Autoprovision</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driver">Driver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver EcsTaskDefinition#driver}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driverOpts">DriverOpts</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#labels EcsTaskDefinition#labels}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#scope EcsTaskDefinition#scope}. |

---

##### `Autoprovision`<sup>Optional</sup> <a name="Autoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.autoprovision"></a>

```csharp
public object Autoprovision { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}.

---

##### `Driver`<sup>Optional</sup> <a name="Driver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driver"></a>

```csharp
public string Driver { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver EcsTaskDefinition#driver}.

---

##### `DriverOpts`<sup>Optional</sup> <a name="DriverOpts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.driverOpts"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverOpts { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#labels EcsTaskDefinition#labels}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#scope EcsTaskDefinition#scope}.

---

### EcsTaskDefinitionVolumeEfsVolumeConfiguration <a name="EcsTaskDefinitionVolumeEfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeEfsVolumeConfiguration {
    string FileSystemId,
    EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig AuthorizationConfig = null,
    string RootDirectory = null,
    string TransitEncryption = null,
    double TransitEncryptionPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | authorization_config block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryption">TransitEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryptionPort">TransitEncryptionPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}. |

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}.

---

##### `AuthorizationConfig`<sup>Optional</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.authorizationConfig"></a>

```csharp
public EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig AuthorizationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}

---

##### `RootDirectory`<sup>Optional</sup> <a name="RootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}.

---

##### `TransitEncryption`<sup>Optional</sup> <a name="TransitEncryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryption"></a>

```csharp
public string TransitEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}.

---

##### `TransitEncryptionPort`<sup>Optional</sup> <a name="TransitEncryptionPort" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration.property.transitEncryptionPort"></a>

```csharp
public double TransitEncryptionPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}.

---

### EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
    string AccessPointId = null,
    string Iam = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.accessPointId">AccessPointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.iam">Iam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#iam EcsTaskDefinition#iam}. |

---

##### `AccessPointId`<sup>Optional</sup> <a name="AccessPointId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.accessPointId"></a>

```csharp
public string AccessPointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}.

---

##### `Iam`<sup>Optional</sup> <a name="Iam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig.property.iam"></a>

```csharp
public string Iam { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#iam EcsTaskDefinition#iam}.

---

### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration {
    EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig AuthorizationConfig,
    string FileSystemId,
    string RootDirectory
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | authorization_config block. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}. |

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.authorizationConfig"></a>

```csharp
public EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig AuthorizationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

authorization_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}.

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}.

---

### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
    string CredentialsParameter,
    string Domain
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.credentialsParameter">CredentialsParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#domain EcsTaskDefinition#domain}. |

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.credentialsParameter"></a>

```csharp
public string CredentialsParameter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}.

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition#domain EcsTaskDefinition#domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsTaskDefinitionEphemeralStorageOutputReference <a name="EcsTaskDefinitionEphemeralStorageOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionEphemeralStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGibInput">SizeInGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGib">SizeInGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeInGibInput`<sup>Optional</sup> <a name="SizeInGibInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGibInput"></a>

```csharp
public double SizeInGibInput { get; }
```

- *Type:* double

---

##### `SizeInGib`<sup>Required</sup> <a name="SizeInGib" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGib"></a>

```csharp
public double SizeInGib { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue"></a>

```csharp
public EcsTaskDefinitionEphemeralStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionEphemeralStorage">EcsTaskDefinitionEphemeralStorage</a>

---


### EcsTaskDefinitionInferenceAcceleratorList <a name="EcsTaskDefinitionInferenceAcceleratorList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionInferenceAcceleratorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get"></a>

```csharp
private EcsTaskDefinitionInferenceAcceleratorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsTaskDefinitionInferenceAcceleratorOutputReference <a name="EcsTaskDefinitionInferenceAcceleratorOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionInferenceAcceleratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceType">DeviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceTypeInput"></a>

```csharp
public string DeviceTypeInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.deviceType"></a>

```csharp
public string DeviceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionInferenceAcceleratorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsTaskDefinitionPlacementConstraintsList <a name="EcsTaskDefinitionPlacementConstraintsList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionPlacementConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get"></a>

```csharp
private EcsTaskDefinitionPlacementConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsTaskDefinitionPlacementConstraintsOutputReference <a name="EcsTaskDefinitionPlacementConstraintsOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionPlacementConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsTaskDefinitionProxyConfigurationOutputReference <a name="EcsTaskDefinitionProxyConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionProxyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue"></a>

```csharp
public EcsTaskDefinitionProxyConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionProxyConfiguration">EcsTaskDefinitionProxyConfiguration</a>

---


### EcsTaskDefinitionRuntimePlatformOutputReference <a name="EcsTaskDefinitionRuntimePlatformOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionRuntimePlatformOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetCpuArchitecture">ResetCpuArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetOperatingSystemFamily">ResetOperatingSystemFamily</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuArchitecture` <a name="ResetCpuArchitecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetCpuArchitecture"></a>

```csharp
private void ResetCpuArchitecture()
```

##### `ResetOperatingSystemFamily` <a name="ResetOperatingSystemFamily" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.resetOperatingSystemFamily"></a>

```csharp
private void ResetOperatingSystemFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitectureInput">CpuArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamilyInput">OperatingSystemFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture">CpuArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily">OperatingSystemFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuArchitectureInput`<sup>Optional</sup> <a name="CpuArchitectureInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitectureInput"></a>

```csharp
public string CpuArchitectureInput { get; }
```

- *Type:* string

---

##### `OperatingSystemFamilyInput`<sup>Optional</sup> <a name="OperatingSystemFamilyInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamilyInput"></a>

```csharp
public string OperatingSystemFamilyInput { get; }
```

- *Type:* string

---

##### `CpuArchitecture`<sup>Required</sup> <a name="CpuArchitecture" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture"></a>

```csharp
public string CpuArchitecture { get; }
```

- *Type:* string

---

##### `OperatingSystemFamily`<sup>Required</sup> <a name="OperatingSystemFamily" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily"></a>

```csharp
public string OperatingSystemFamily { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue"></a>

```csharp
public EcsTaskDefinitionRuntimePlatform InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionRuntimePlatform">EcsTaskDefinitionRuntimePlatform</a>

---


### EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetAutoprovision">ResetAutoprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriver">ResetDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriverOpts">ResetDriverOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoprovision` <a name="ResetAutoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetAutoprovision"></a>

```csharp
private void ResetAutoprovision()
```

##### `ResetDriver` <a name="ResetDriver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriver"></a>

```csharp
private void ResetDriver()
```

##### `ResetDriverOpts` <a name="ResetDriverOpts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetDriverOpts"></a>

```csharp
private void ResetDriverOpts()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovisionInput">AutoprovisionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverInput">DriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOptsInput">DriverOptsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovision">Autoprovision</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driver">Driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOpts">DriverOpts</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoprovisionInput`<sup>Optional</sup> <a name="AutoprovisionInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovisionInput"></a>

```csharp
public object AutoprovisionInput { get; }
```

- *Type:* object

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverInput"></a>

```csharp
public string DriverInput { get; }
```

- *Type:* string

---

##### `DriverOptsInput`<sup>Optional</sup> <a name="DriverOptsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOptsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverOptsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Autoprovision`<sup>Required</sup> <a name="Autoprovision" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.autoprovision"></a>

```csharp
public object Autoprovision { get; }
```

- *Type:* object

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driver"></a>

```csharp
public string Driver { get; }
```

- *Type:* string

---

##### `DriverOpts`<sup>Required</sup> <a name="DriverOpts" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.driverOpts"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverOpts { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference.property.internalValue"></a>

```csharp
public EcsTaskDefinitionVolumeDockerVolumeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetAccessPointId">ResetAccessPointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetIam">ResetIam</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessPointId` <a name="ResetAccessPointId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetAccessPointId"></a>

```csharp
private void ResetAccessPointId()
```

##### `ResetIam` <a name="ResetIam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.resetIam"></a>

```csharp
private void ResetIam()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointIdInput">AccessPointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iamInput">IamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId">AccessPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam">Iam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessPointIdInput`<sup>Optional</sup> <a name="AccessPointIdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointIdInput"></a>

```csharp
public string AccessPointIdInput { get; }
```

- *Type:* string

---

##### `IamInput`<sup>Optional</sup> <a name="IamInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iamInput"></a>

```csharp
public string IamInput { get; }
```

- *Type:* string

---

##### `AccessPointId`<sup>Required</sup> <a name="AccessPointId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId"></a>

```csharp
public string AccessPointId { get; }
```

- *Type:* string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam"></a>

```csharp
public string Iam { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---


### EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetAuthorizationConfig">ResetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetRootDirectory">ResetRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryption">ResetTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryptionPort">ResetTransitEncryptionPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig"></a>

```csharp
private void PutAuthorizationConfig(EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---

##### `ResetAuthorizationConfig` <a name="ResetAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetAuthorizationConfig"></a>

```csharp
private void ResetAuthorizationConfig()
```

##### `ResetRootDirectory` <a name="ResetRootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetRootDirectory"></a>

```csharp
private void ResetRootDirectory()
```

##### `ResetTransitEncryption` <a name="ResetTransitEncryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryption"></a>

```csharp
private void ResetTransitEncryption()
```

##### `ResetTransitEncryptionPort` <a name="ResetTransitEncryptionPort" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.resetTransitEncryptionPort"></a>

```csharp
private void ResetTransitEncryptionPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionInput">TransitEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPortInput">TransitEncryptionPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryption">TransitEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPort">TransitEncryptionPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```csharp
public EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.authorizationConfigInput"></a>

```csharp
public EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig AuthorizationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig</a>

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectoryInput"></a>

```csharp
public string RootDirectoryInput { get; }
```

- *Type:* string

---

##### `TransitEncryptionInput`<sup>Optional</sup> <a name="TransitEncryptionInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionInput"></a>

```csharp
public string TransitEncryptionInput { get; }
```

- *Type:* string

---

##### `TransitEncryptionPortInput`<sup>Optional</sup> <a name="TransitEncryptionPortInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPortInput"></a>

```csharp
public double TransitEncryptionPortInput { get; }
```

- *Type:* double

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; }
```

- *Type:* string

---

##### `TransitEncryption`<sup>Required</sup> <a name="TransitEncryption" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryption"></a>

```csharp
public string TransitEncryption { get; }
```

- *Type:* string

---

##### `TransitEncryptionPort`<sup>Required</sup> <a name="TransitEncryptionPort" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.transitEncryptionPort"></a>

```csharp
public double TransitEncryptionPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference.property.internalValue"></a>

```csharp
public EcsTaskDefinitionVolumeEfsVolumeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameterInput">CredentialsParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialsParameterInput`<sup>Optional</sup> <a name="CredentialsParameterInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameterInput"></a>

```csharp
public string CredentialsParameterInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter"></a>

```csharp
public string CredentialsParameter { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---


### EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference <a name="EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig">PutAuthorizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationConfig` <a name="PutAuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig"></a>

```csharp
private void PutAuthorizationConfig(EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfigInput">AuthorizationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```csharp
public EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `AuthorizationConfigInput`<sup>Optional</sup> <a name="AuthorizationConfigInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfigInput"></a>

```csharp
public EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig AuthorizationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectoryInput"></a>

```csharp
public string RootDirectoryInput { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue"></a>

```csharp
public EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---


### EcsTaskDefinitionVolumeList <a name="EcsTaskDefinitionVolumeList" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get"></a>

```csharp
private EcsTaskDefinitionVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcsTaskDefinitionVolumeOutputReference <a name="EcsTaskDefinitionVolumeOutputReference" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcsTaskDefinitionVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration">PutDockerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration">PutEfsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration">PutFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetDockerVolumeConfiguration">ResetDockerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetEfsVolumeConfiguration">ResetEfsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetFsxWindowsFileServerVolumeConfiguration">ResetFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetHostPath">ResetHostPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDockerVolumeConfiguration` <a name="PutDockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration"></a>

```csharp
private void PutDockerVolumeConfiguration(EcsTaskDefinitionVolumeDockerVolumeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putDockerVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---

##### `PutEfsVolumeConfiguration` <a name="PutEfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration"></a>

```csharp
private void PutEfsVolumeConfiguration(EcsTaskDefinitionVolumeEfsVolumeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putEfsVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---

##### `PutFsxWindowsFileServerVolumeConfiguration` <a name="PutFsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration"></a>

```csharp
private void PutFsxWindowsFileServerVolumeConfiguration(EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.putFsxWindowsFileServerVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---

##### `ResetDockerVolumeConfiguration` <a name="ResetDockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetDockerVolumeConfiguration"></a>

```csharp
private void ResetDockerVolumeConfiguration()
```

##### `ResetEfsVolumeConfiguration` <a name="ResetEfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetEfsVolumeConfiguration"></a>

```csharp
private void ResetEfsVolumeConfiguration()
```

##### `ResetFsxWindowsFileServerVolumeConfiguration` <a name="ResetFsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetFsxWindowsFileServerVolumeConfiguration"></a>

```csharp
private void ResetFsxWindowsFileServerVolumeConfiguration()
```

##### `ResetHostPath` <a name="ResetHostPath" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.resetHostPath"></a>

```csharp
private void ResetHostPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfiguration">DockerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfiguration">EfsVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfiguration">FsxWindowsFileServerVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfigurationInput">DockerVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfigurationInput">EfsVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfigurationInput">FsxWindowsFileServerVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPathInput">HostPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPath">HostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DockerVolumeConfiguration`<sup>Required</sup> <a name="DockerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfiguration"></a>

```csharp
public EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference DockerVolumeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference</a>

---

##### `EfsVolumeConfiguration`<sup>Required</sup> <a name="EfsVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfiguration"></a>

```csharp
public EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference EfsVolumeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference</a>

---

##### `FsxWindowsFileServerVolumeConfiguration`<sup>Required</sup> <a name="FsxWindowsFileServerVolumeConfiguration" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfiguration"></a>

```csharp
public EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference FsxWindowsFileServerVolumeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference</a>

---

##### `DockerVolumeConfigurationInput`<sup>Optional</sup> <a name="DockerVolumeConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.dockerVolumeConfigurationInput"></a>

```csharp
public EcsTaskDefinitionVolumeDockerVolumeConfiguration DockerVolumeConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeDockerVolumeConfiguration">EcsTaskDefinitionVolumeDockerVolumeConfiguration</a>

---

##### `EfsVolumeConfigurationInput`<sup>Optional</sup> <a name="EfsVolumeConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.efsVolumeConfigurationInput"></a>

```csharp
public EcsTaskDefinitionVolumeEfsVolumeConfiguration EfsVolumeConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeEfsVolumeConfiguration">EcsTaskDefinitionVolumeEfsVolumeConfiguration</a>

---

##### `FsxWindowsFileServerVolumeConfigurationInput`<sup>Optional</sup> <a name="FsxWindowsFileServerVolumeConfigurationInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.fsxWindowsFileServerVolumeConfigurationInput"></a>

```csharp
public EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration FsxWindowsFileServerVolumeConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration">EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration</a>

---

##### `HostPathInput`<sup>Optional</sup> <a name="HostPathInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPathInput"></a>

```csharp
public string HostPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.hostPath"></a>

```csharp
public string HostPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsTaskDefinition.EcsTaskDefinitionVolumeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



