# `sagemakerFlowDefinition` Submodule <a name="`sagemakerFlowDefinition` Submodule" id="@cdktf/provider-aws.sagemakerFlowDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerFlowDefinition <a name="SagemakerFlowDefinition" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition aws_sagemaker_flow_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinition(Construct Scope, string Id, SagemakerFlowDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig">SagemakerFlowDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig">SagemakerFlowDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig">PutHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig">PutHumanLoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource">PutHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig">PutOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopActivationConfig">ResetHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopRequestSource">ResetHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutHumanLoopActivationConfig` <a name="PutHumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig"></a>

```csharp
private void PutHumanLoopActivationConfig(SagemakerFlowDefinitionHumanLoopActivationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---

##### `PutHumanLoopConfig` <a name="PutHumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig"></a>

```csharp
private void PutHumanLoopConfig(SagemakerFlowDefinitionHumanLoopConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---

##### `PutHumanLoopRequestSource` <a name="PutHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource"></a>

```csharp
private void PutHumanLoopRequestSource(SagemakerFlowDefinitionHumanLoopRequestSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---

##### `PutOutputConfig` <a name="PutOutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig"></a>

```csharp
private void PutOutputConfig(SagemakerFlowDefinitionOutputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---

##### `ResetHumanLoopActivationConfig` <a name="ResetHumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopActivationConfig"></a>

```csharp
private void ResetHumanLoopActivationConfig()
```

##### `ResetHumanLoopRequestSource` <a name="ResetHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopRequestSource"></a>

```csharp
private void ResetHumanLoopRequestSource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerFlowDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerFlowDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerFlowDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfig">HumanLoopActivationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfig">HumanLoopConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference">SagemakerFlowDefinitionHumanLoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSource">HumanLoopRequestSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference">SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference">SagemakerFlowDefinitionOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionNameInput">FlowDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfigInput">HumanLoopActivationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfigInput">HumanLoopConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSourceInput">HumanLoopRequestSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfigInput">OutputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionName">FlowDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HumanLoopActivationConfig`<sup>Required</sup> <a name="HumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfig"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference HumanLoopActivationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference</a>

---

##### `HumanLoopConfig`<sup>Required</sup> <a name="HumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfig"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfigOutputReference HumanLoopConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference">SagemakerFlowDefinitionHumanLoopConfigOutputReference</a>

---

##### `HumanLoopRequestSource`<sup>Required</sup> <a name="HumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSource"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference HumanLoopRequestSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference">SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference</a>

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfig"></a>

```csharp
public SagemakerFlowDefinitionOutputConfigOutputReference OutputConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference">SagemakerFlowDefinitionOutputConfigOutputReference</a>

---

##### `FlowDefinitionNameInput`<sup>Optional</sup> <a name="FlowDefinitionNameInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionNameInput"></a>

```csharp
public string FlowDefinitionNameInput { get; }
```

- *Type:* string

---

##### `HumanLoopActivationConfigInput`<sup>Optional</sup> <a name="HumanLoopActivationConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfigInput"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopActivationConfig HumanLoopActivationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---

##### `HumanLoopConfigInput`<sup>Optional</sup> <a name="HumanLoopConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfigInput"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfig HumanLoopConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---

##### `HumanLoopRequestSourceInput`<sup>Optional</sup> <a name="HumanLoopRequestSourceInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSourceInput"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopRequestSource HumanLoopRequestSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OutputConfigInput`<sup>Optional</sup> <a name="OutputConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfigInput"></a>

```csharp
public SagemakerFlowDefinitionOutputConfig OutputConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FlowDefinitionName`<sup>Required</sup> <a name="FlowDefinitionName" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionName"></a>

```csharp
public string FlowDefinitionName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerFlowDefinitionConfig <a name="SagemakerFlowDefinitionConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FlowDefinitionName,
    SagemakerFlowDefinitionHumanLoopConfig HumanLoopConfig,
    SagemakerFlowDefinitionOutputConfig OutputConfig,
    string RoleArn,
    SagemakerFlowDefinitionHumanLoopActivationConfig HumanLoopActivationConfig = null,
    SagemakerFlowDefinitionHumanLoopRequestSource HumanLoopRequestSource = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.flowDefinitionName">FlowDefinitionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopConfig">HumanLoopConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | human_loop_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopActivationConfig">HumanLoopActivationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | human_loop_activation_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopRequestSource">HumanLoopRequestSource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | human_loop_request_source block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FlowDefinitionName`<sup>Required</sup> <a name="FlowDefinitionName" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.flowDefinitionName"></a>

```csharp
public string FlowDefinitionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}.

---

##### `HumanLoopConfig`<sup>Required</sup> <a name="HumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopConfig"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfig HumanLoopConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

human_loop_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_config SagemakerFlowDefinition#human_loop_config}

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.outputConfig"></a>

```csharp
public SagemakerFlowDefinitionOutputConfig OutputConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#output_config SagemakerFlowDefinition#output_config}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}.

---

##### `HumanLoopActivationConfig`<sup>Optional</sup> <a name="HumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopActivationConfig"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopActivationConfig HumanLoopActivationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

human_loop_activation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}

---

##### `HumanLoopRequestSource`<sup>Optional</sup> <a name="HumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopRequestSource"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopRequestSource HumanLoopRequestSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

human_loop_request_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}.

---

### SagemakerFlowDefinitionHumanLoopActivationConfig <a name="SagemakerFlowDefinitionHumanLoopActivationConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopActivationConfig {
    SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig HumanLoopActivationConditionsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.property.humanLoopActivationConditionsConfig">HumanLoopActivationConditionsConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | human_loop_activation_conditions_config block. |

---

##### `HumanLoopActivationConditionsConfig`<sup>Optional</sup> <a name="HumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.property.humanLoopActivationConditionsConfig"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig HumanLoopActivationConditionsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

human_loop_activation_conditions_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}

---

### SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig <a name="SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig {
    string HumanLoopActivationConditions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.property.humanLoopActivationConditions">HumanLoopActivationConditions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}. |

---

##### `HumanLoopActivationConditions`<sup>Required</sup> <a name="HumanLoopActivationConditions" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.property.humanLoopActivationConditions"></a>

```csharp
public string HumanLoopActivationConditions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}.

---

### SagemakerFlowDefinitionHumanLoopConfig <a name="SagemakerFlowDefinitionHumanLoopConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopConfig {
    string HumanTaskUiArn,
    double TaskCount,
    string TaskDescription,
    string TaskTitle,
    string WorkteamArn,
    SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice PublicWorkforceTaskPrice = null,
    double TaskAvailabilityLifetimeInSeconds = null,
    string[] TaskKeywords = null,
    double TaskTimeLimitInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.humanTaskUiArn">HumanTaskUiArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskCount">TaskCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskDescription">TaskDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTitle">TaskTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.workteamArn">WorkteamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.publicWorkforceTaskPrice">PublicWorkforceTaskPrice</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | public_workforce_task_price block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskAvailabilityLifetimeInSeconds">TaskAvailabilityLifetimeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskKeywords">TaskKeywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTimeLimitInSeconds">TaskTimeLimitInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}. |

---

##### `HumanTaskUiArn`<sup>Required</sup> <a name="HumanTaskUiArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.humanTaskUiArn"></a>

```csharp
public string HumanTaskUiArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}.

---

##### `TaskCount`<sup>Required</sup> <a name="TaskCount" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskCount"></a>

```csharp
public double TaskCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}.

---

##### `TaskDescription`<sup>Required</sup> <a name="TaskDescription" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskDescription"></a>

```csharp
public string TaskDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}.

---

##### `TaskTitle`<sup>Required</sup> <a name="TaskTitle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTitle"></a>

```csharp
public string TaskTitle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}.

---

##### `WorkteamArn`<sup>Required</sup> <a name="WorkteamArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.workteamArn"></a>

```csharp
public string WorkteamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}.

---

##### `PublicWorkforceTaskPrice`<sup>Optional</sup> <a name="PublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.publicWorkforceTaskPrice"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice PublicWorkforceTaskPrice { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

public_workforce_task_price block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}

---

##### `TaskAvailabilityLifetimeInSeconds`<sup>Optional</sup> <a name="TaskAvailabilityLifetimeInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskAvailabilityLifetimeInSeconds"></a>

```csharp
public double TaskAvailabilityLifetimeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}.

---

##### `TaskKeywords`<sup>Optional</sup> <a name="TaskKeywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskKeywords"></a>

```csharp
public string[] TaskKeywords { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}.

---

##### `TaskTimeLimitInSeconds`<sup>Optional</sup> <a name="TaskTimeLimitInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTimeLimitInSeconds"></a>

```csharp
public double TaskTimeLimitInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}.

---

### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {
    SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd AmountInUsd = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.property.amountInUsd">AmountInUsd</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | amount_in_usd block. |

---

##### `AmountInUsd`<sup>Optional</sup> <a name="AmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.property.amountInUsd"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd AmountInUsd { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

amount_in_usd block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#amount_in_usd SagemakerFlowDefinition#amount_in_usd}

---

### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
    double Cents = null,
    double Dollars = null,
    double TenthFractionsOfACent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.cents">Cents</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars">Dollars</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent">TenthFractionsOfACent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}. |

---

##### `Cents`<sup>Optional</sup> <a name="Cents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.cents"></a>

```csharp
public double Cents { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}.

---

##### `Dollars`<sup>Optional</sup> <a name="Dollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars"></a>

```csharp
public double Dollars { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}.

---

##### `TenthFractionsOfACent`<sup>Optional</sup> <a name="TenthFractionsOfACent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent"></a>

```csharp
public double TenthFractionsOfACent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}.

---

### SagemakerFlowDefinitionHumanLoopRequestSource <a name="SagemakerFlowDefinitionHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopRequestSource {
    string AwsManagedHumanLoopRequestSource
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.property.awsManagedHumanLoopRequestSource">AwsManagedHumanLoopRequestSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}. |

---

##### `AwsManagedHumanLoopRequestSource`<sup>Required</sup> <a name="AwsManagedHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.property.awsManagedHumanLoopRequestSource"></a>

```csharp
public string AwsManagedHumanLoopRequestSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}.

---

### SagemakerFlowDefinitionOutputConfig <a name="SagemakerFlowDefinitionOutputConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionOutputConfig {
    string S3OutputPath,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}. |

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditionsInput">HumanLoopActivationConditionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditions">HumanLoopActivationConditions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HumanLoopActivationConditionsInput`<sup>Optional</sup> <a name="HumanLoopActivationConditionsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditionsInput"></a>

```csharp
public string HumanLoopActivationConditionsInput { get; }
```

- *Type:* string

---

##### `HumanLoopActivationConditions`<sup>Required</sup> <a name="HumanLoopActivationConditions" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditions"></a>

```csharp
public string HumanLoopActivationConditions { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---


### SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig">PutHumanLoopActivationConditionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resetHumanLoopActivationConditionsConfig">ResetHumanLoopActivationConditionsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHumanLoopActivationConditionsConfig` <a name="PutHumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig"></a>

```csharp
private void PutHumanLoopActivationConditionsConfig(SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---

##### `ResetHumanLoopActivationConditionsConfig` <a name="ResetHumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resetHumanLoopActivationConditionsConfig"></a>

```csharp
private void ResetHumanLoopActivationConditionsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfig">HumanLoopActivationConditionsConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfigInput">HumanLoopActivationConditionsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HumanLoopActivationConditionsConfig`<sup>Required</sup> <a name="HumanLoopActivationConditionsConfig" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfig"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference HumanLoopActivationConditionsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference</a>

---

##### `HumanLoopActivationConditionsConfigInput`<sup>Optional</sup> <a name="HumanLoopActivationConditionsConfigInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfigInput"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig HumanLoopActivationConditionsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopActivationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---


### SagemakerFlowDefinitionHumanLoopConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice">PutPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetPublicWorkforceTaskPrice">ResetPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds">ResetTaskAvailabilityLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskKeywords">ResetTaskKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskTimeLimitInSeconds">ResetTaskTimeLimitInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicWorkforceTaskPrice` <a name="PutPublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice"></a>

```csharp
private void PutPublicWorkforceTaskPrice(SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---

##### `ResetPublicWorkforceTaskPrice` <a name="ResetPublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetPublicWorkforceTaskPrice"></a>

```csharp
private void ResetPublicWorkforceTaskPrice()
```

##### `ResetTaskAvailabilityLifetimeInSeconds` <a name="ResetTaskAvailabilityLifetimeInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds"></a>

```csharp
private void ResetTaskAvailabilityLifetimeInSeconds()
```

##### `ResetTaskKeywords` <a name="ResetTaskKeywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskKeywords"></a>

```csharp
private void ResetTaskKeywords()
```

##### `ResetTaskTimeLimitInSeconds` <a name="ResetTaskTimeLimitInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskTimeLimitInSeconds"></a>

```csharp
private void ResetTaskTimeLimitInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPrice">PublicWorkforceTaskPrice</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArnInput">HumanTaskUiArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPriceInput">PublicWorkforceTaskPriceInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput">TaskAvailabilityLifetimeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCountInput">TaskCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescriptionInput">TaskDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywordsInput">TaskKeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSecondsInput">TaskTimeLimitInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitleInput">TaskTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArnInput">WorkteamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArn">HumanTaskUiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSeconds">TaskAvailabilityLifetimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCount">TaskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescription">TaskDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywords">TaskKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSeconds">TaskTimeLimitInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitle">TaskTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArn">WorkteamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicWorkforceTaskPrice`<sup>Required</sup> <a name="PublicWorkforceTaskPrice" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPrice"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference PublicWorkforceTaskPrice { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference</a>

---

##### `HumanTaskUiArnInput`<sup>Optional</sup> <a name="HumanTaskUiArnInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArnInput"></a>

```csharp
public string HumanTaskUiArnInput { get; }
```

- *Type:* string

---

##### `PublicWorkforceTaskPriceInput`<sup>Optional</sup> <a name="PublicWorkforceTaskPriceInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPriceInput"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice PublicWorkforceTaskPriceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---

##### `TaskAvailabilityLifetimeInSecondsInput`<sup>Optional</sup> <a name="TaskAvailabilityLifetimeInSecondsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput"></a>

```csharp
public double TaskAvailabilityLifetimeInSecondsInput { get; }
```

- *Type:* double

---

##### `TaskCountInput`<sup>Optional</sup> <a name="TaskCountInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCountInput"></a>

```csharp
public double TaskCountInput { get; }
```

- *Type:* double

---

##### `TaskDescriptionInput`<sup>Optional</sup> <a name="TaskDescriptionInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescriptionInput"></a>

```csharp
public string TaskDescriptionInput { get; }
```

- *Type:* string

---

##### `TaskKeywordsInput`<sup>Optional</sup> <a name="TaskKeywordsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywordsInput"></a>

```csharp
public string[] TaskKeywordsInput { get; }
```

- *Type:* string[]

---

##### `TaskTimeLimitInSecondsInput`<sup>Optional</sup> <a name="TaskTimeLimitInSecondsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSecondsInput"></a>

```csharp
public double TaskTimeLimitInSecondsInput { get; }
```

- *Type:* double

---

##### `TaskTitleInput`<sup>Optional</sup> <a name="TaskTitleInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitleInput"></a>

```csharp
public string TaskTitleInput { get; }
```

- *Type:* string

---

##### `WorkteamArnInput`<sup>Optional</sup> <a name="WorkteamArnInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArnInput"></a>

```csharp
public string WorkteamArnInput { get; }
```

- *Type:* string

---

##### `HumanTaskUiArn`<sup>Required</sup> <a name="HumanTaskUiArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArn"></a>

```csharp
public string HumanTaskUiArn { get; }
```

- *Type:* string

---

##### `TaskAvailabilityLifetimeInSeconds`<sup>Required</sup> <a name="TaskAvailabilityLifetimeInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSeconds"></a>

```csharp
public double TaskAvailabilityLifetimeInSeconds { get; }
```

- *Type:* double

---

##### `TaskCount`<sup>Required</sup> <a name="TaskCount" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCount"></a>

```csharp
public double TaskCount { get; }
```

- *Type:* double

---

##### `TaskDescription`<sup>Required</sup> <a name="TaskDescription" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescription"></a>

```csharp
public string TaskDescription { get; }
```

- *Type:* string

---

##### `TaskKeywords`<sup>Required</sup> <a name="TaskKeywords" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywords"></a>

```csharp
public string[] TaskKeywords { get; }
```

- *Type:* string[]

---

##### `TaskTimeLimitInSeconds`<sup>Required</sup> <a name="TaskTimeLimitInSeconds" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSeconds"></a>

```csharp
public double TaskTimeLimitInSeconds { get; }
```

- *Type:* double

---

##### `TaskTitle`<sup>Required</sup> <a name="TaskTitle" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitle"></a>

```csharp
public string TaskTitle { get; }
```

- *Type:* string

---

##### `WorkteamArn`<sup>Required</sup> <a name="WorkteamArn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArn"></a>

```csharp
public string WorkteamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---


### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents">ResetCents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars">ResetDollars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent">ResetTenthFractionsOfACent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCents` <a name="ResetCents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents"></a>

```csharp
private void ResetCents()
```

##### `ResetDollars` <a name="ResetDollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars"></a>

```csharp
private void ResetDollars()
```

##### `ResetTenthFractionsOfACent` <a name="ResetTenthFractionsOfACent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent"></a>

```csharp
private void ResetTenthFractionsOfACent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput">CentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput">DollarsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput">TenthFractionsOfACentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents">Cents</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars">Dollars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent">TenthFractionsOfACent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CentsInput`<sup>Optional</sup> <a name="CentsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput"></a>

```csharp
public double CentsInput { get; }
```

- *Type:* double

---

##### `DollarsInput`<sup>Optional</sup> <a name="DollarsInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput"></a>

```csharp
public double DollarsInput { get; }
```

- *Type:* double

---

##### `TenthFractionsOfACentInput`<sup>Optional</sup> <a name="TenthFractionsOfACentInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput"></a>

```csharp
public double TenthFractionsOfACentInput { get; }
```

- *Type:* double

---

##### `Cents`<sup>Required</sup> <a name="Cents" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents"></a>

```csharp
public double Cents { get; }
```

- *Type:* double

---

##### `Dollars`<sup>Required</sup> <a name="Dollars" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars"></a>

```csharp
public double Dollars { get; }
```

- *Type:* double

---

##### `TenthFractionsOfACent`<sup>Required</sup> <a name="TenthFractionsOfACent" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent"></a>

```csharp
public double TenthFractionsOfACent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---


### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd">PutAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd">ResetAmountInUsd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmountInUsd` <a name="PutAmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd"></a>

```csharp
private void PutAmountInUsd(SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---

##### `ResetAmountInUsd` <a name="ResetAmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd"></a>

```csharp
private void ResetAmountInUsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd">AmountInUsd</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput">AmountInUsdInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmountInUsd`<sup>Required</sup> <a name="AmountInUsd" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference AmountInUsd { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference</a>

---

##### `AmountInUsdInput`<sup>Optional</sup> <a name="AmountInUsdInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd AmountInUsdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.internalValue"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---


### SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference <a name="SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSourceInput">AwsManagedHumanLoopRequestSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSource">AwsManagedHumanLoopRequestSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsManagedHumanLoopRequestSourceInput`<sup>Optional</sup> <a name="AwsManagedHumanLoopRequestSourceInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSourceInput"></a>

```csharp
public string AwsManagedHumanLoopRequestSourceInput { get; }
```

- *Type:* string

---

##### `AwsManagedHumanLoopRequestSource`<sup>Required</sup> <a name="AwsManagedHumanLoopRequestSource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSource"></a>

```csharp
public string AwsManagedHumanLoopRequestSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.internalValue"></a>

```csharp
public SagemakerFlowDefinitionHumanLoopRequestSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---


### SagemakerFlowDefinitionOutputConfigOutputReference <a name="SagemakerFlowDefinitionOutputConfigOutputReference" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFlowDefinitionOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPathInput">S3OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `S3OutputPathInput`<sup>Optional</sup> <a name="S3OutputPathInput" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPathInput"></a>

```csharp
public string S3OutputPathInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFlowDefinitionOutputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---



