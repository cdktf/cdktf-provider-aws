# `glueTrigger` Submodule <a name="`glueTrigger` Submodule" id="@cdktf/provider-aws.glueTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTrigger <a name="GlueTrigger" id="@cdktf/provider-aws.glueTrigger.GlueTrigger"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger aws_glue_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTrigger(Construct Scope, string Id, GlueTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putEventBatchingCondition">PutEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEventBatchingCondition">ResetEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetPredicate">ResetPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetStartOnCreation">ResetStartOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putActions"></a>

```csharp
private void PutActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putActions.parameter.value"></a>

- *Type:* object

---

##### `PutEventBatchingCondition` <a name="PutEventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putEventBatchingCondition"></a>

```csharp
private void PutEventBatchingCondition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putEventBatchingCondition.parameter.value"></a>

- *Type:* object

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putPredicate"></a>

```csharp
private void PutPredicate(GlueTriggerPredicate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putTimeouts"></a>

```csharp
private void PutTimeouts(GlueTriggerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEventBatchingCondition` <a name="ResetEventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEventBatchingCondition"></a>

```csharp
private void ResetEventBatchingCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPredicate` <a name="ResetPredicate" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetPredicate"></a>

```csharp
private void ResetPredicate()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetStartOnCreation` <a name="ResetStartOnCreation" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetStartOnCreation"></a>

```csharp
private void ResetStartOnCreation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetWorkflowName"></a>

```csharp
private void ResetWorkflowName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueTrigger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingCondition">EventBatchingCondition</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList">GlueTriggerEventBatchingConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference">GlueTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actionsInput">ActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingConditionInput">EventBatchingConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicateInput">PredicateInput</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreationInput">StartOnCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowNameInput">WorkflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreation">StartOnCreation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowName">WorkflowName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actions"></a>

```csharp
public GlueTriggerActionsList Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EventBatchingCondition`<sup>Required</sup> <a name="EventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingCondition"></a>

```csharp
public GlueTriggerEventBatchingConditionList EventBatchingCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList">GlueTriggerEventBatchingConditionList</a>

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicate"></a>

```csharp
public GlueTriggerPredicateOutputReference Predicate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeouts"></a>

```csharp
public GlueTriggerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference">GlueTriggerTimeoutsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actionsInput"></a>

```csharp
public object ActionsInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EventBatchingConditionInput`<sup>Optional</sup> <a name="EventBatchingConditionInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingConditionInput"></a>

```csharp
public object EventBatchingConditionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicateInput"></a>

```csharp
public GlueTriggerPredicate PredicateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `StartOnCreationInput`<sup>Optional</sup> <a name="StartOnCreationInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreationInput"></a>

```csharp
public object StartOnCreationInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowNameInput"></a>

```csharp
public string WorkflowNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `StartOnCreation`<sup>Required</sup> <a name="StartOnCreation" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreation"></a>

```csharp
public object StartOnCreation { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowName"></a>

```csharp
public string WorkflowName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTriggerActions <a name="GlueTriggerActions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerActions {
    System.Collections.Generic.IDictionary<string, string> Arguments = null,
    string CrawlerName = null,
    string JobName = null,
    GlueTriggerActionsNotificationProperty NotificationProperty = null,
    string SecurityConfiguration = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.arguments">Arguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#arguments GlueTrigger#arguments}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.crawlerName">CrawlerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.jobName">JobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | notification_property block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#security_configuration GlueTrigger#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeout GlueTrigger#timeout}. |

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.arguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Arguments { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#arguments GlueTrigger#arguments}.

---

##### `CrawlerName`<sup>Optional</sup> <a name="CrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.crawlerName"></a>

```csharp
public string CrawlerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}.

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}.

---

##### `NotificationProperty`<sup>Optional</sup> <a name="NotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.notificationProperty"></a>

```csharp
public GlueTriggerActionsNotificationProperty NotificationProperty { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

notification_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notification_property GlueTrigger#notification_property}

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#security_configuration GlueTrigger#security_configuration}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeout GlueTrigger#timeout}.

---

### GlueTriggerActionsNotificationProperty <a name="GlueTriggerActionsNotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerActionsNotificationProperty {
    double NotifyDelayAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}. |

---

##### `NotifyDelayAfter`<sup>Optional</sup> <a name="NotifyDelayAfter" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter"></a>

```csharp
public double NotifyDelayAfter { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}.

---

### GlueTriggerConfig <a name="GlueTriggerConfig" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Actions,
    string Name,
    string Type,
    string Description = null,
    object Enabled = null,
    object EventBatchingCondition = null,
    string Id = null,
    GlueTriggerPredicate Predicate = null,
    string Schedule = null,
    object StartOnCreation = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    GlueTriggerTimeouts Timeouts = null,
    string WorkflowName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.actions">Actions</a></code> | <code>object</code> | actions block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#name GlueTrigger#name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#type GlueTrigger#type}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#description GlueTrigger#description}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#enabled GlueTrigger#enabled}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition">EventBatchingCondition</a></code> | <code>object</code> | event_batching_condition block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#id GlueTrigger#id}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.schedule">Schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#schedule GlueTrigger#schedule}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.startOnCreation">StartOnCreation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#start_on_creation GlueTrigger#start_on_creation}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags GlueTrigger#tags}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags_all GlueTrigger#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.workflowName">WorkflowName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#workflow_name GlueTrigger#workflow_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.actions"></a>

```csharp
public object Actions { get; set; }
```

- *Type:* object

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#actions GlueTrigger#actions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#name GlueTrigger#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#type GlueTrigger#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#description GlueTrigger#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#enabled GlueTrigger#enabled}.

---

##### `EventBatchingCondition`<sup>Optional</sup> <a name="EventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition"></a>

```csharp
public object EventBatchingCondition { get; set; }
```

- *Type:* object

event_batching_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#id GlueTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Predicate`<sup>Optional</sup> <a name="Predicate" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.predicate"></a>

```csharp
public GlueTriggerPredicate Predicate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#predicate GlueTrigger#predicate}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#schedule GlueTrigger#schedule}.

---

##### `StartOnCreation`<sup>Optional</sup> <a name="StartOnCreation" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.startOnCreation"></a>

```csharp
public object StartOnCreation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#start_on_creation GlueTrigger#start_on_creation}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags GlueTrigger#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags_all GlueTrigger#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.timeouts"></a>

```csharp
public GlueTriggerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeouts GlueTrigger#timeouts}

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.workflowName"></a>

```csharp
public string WorkflowName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#workflow_name GlueTrigger#workflow_name}.

---

### GlueTriggerEventBatchingCondition <a name="GlueTriggerEventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerEventBatchingCondition {
    double BatchSize,
    double BatchWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize">BatchSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_size GlueTrigger#batch_size}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow">BatchWindow</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_window GlueTrigger#batch_window}. |

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize"></a>

```csharp
public double BatchSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_size GlueTrigger#batch_size}.

---

##### `BatchWindow`<sup>Optional</sup> <a name="BatchWindow" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow"></a>

```csharp
public double BatchWindow { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_window GlueTrigger#batch_window}.

---

### GlueTriggerPredicate <a name="GlueTriggerPredicate" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerPredicate {
    object Conditions,
    string Logical = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.logical">Logical</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical GlueTrigger#logical}. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#conditions GlueTrigger#conditions}

---

##### `Logical`<sup>Optional</sup> <a name="Logical" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.logical"></a>

```csharp
public string Logical { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical GlueTrigger#logical}.

---

### GlueTriggerPredicateConditions <a name="GlueTriggerPredicateConditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerPredicateConditions {
    string CrawlerName = null,
    string CrawlState = null,
    string JobName = null,
    string LogicalOperator = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName">CrawlerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlState">CrawlState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawl_state GlueTrigger#crawl_state}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.jobName">JobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical_operator GlueTrigger#logical_operator}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#state GlueTrigger#state}. |

---

##### `CrawlerName`<sup>Optional</sup> <a name="CrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName"></a>

```csharp
public string CrawlerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}.

---

##### `CrawlState`<sup>Optional</sup> <a name="CrawlState" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlState"></a>

```csharp
public string CrawlState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawl_state GlueTrigger#crawl_state}.

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}.

---

##### `LogicalOperator`<sup>Optional</sup> <a name="LogicalOperator" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical_operator GlueTrigger#logical_operator}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#state GlueTrigger#state}.

---

### GlueTriggerTimeouts <a name="GlueTriggerTimeouts" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#create GlueTrigger#create}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#delete GlueTrigger#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#create GlueTrigger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#delete GlueTrigger#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTriggerActionsList <a name="GlueTriggerActionsList" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.get"></a>

```csharp
private GlueTriggerActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueTriggerActionsNotificationPropertyOutputReference <a name="GlueTriggerActionsNotificationPropertyOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerActionsNotificationPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter">ResetNotifyDelayAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotifyDelayAfter` <a name="ResetNotifyDelayAfter" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```csharp
private void ResetNotifyDelayAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput">NotifyDelayAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotifyDelayAfterInput`<sup>Optional</sup> <a name="NotifyDelayAfterInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```csharp
public double NotifyDelayAfterInput { get; }
```

- *Type:* double

---

##### `NotifyDelayAfter`<sup>Required</sup> <a name="NotifyDelayAfter" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```csharp
public double NotifyDelayAfter { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue"></a>

```csharp
public GlueTriggerActionsNotificationProperty InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---


### GlueTriggerActionsOutputReference <a name="GlueTriggerActionsOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty">PutNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName">ResetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty">ResetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationProperty` <a name="PutNotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty"></a>

```csharp
private void PutNotificationProperty(GlueTriggerActionsNotificationProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetCrawlerName` <a name="ResetCrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName"></a>

```csharp
private void ResetCrawlerName()
```

##### `ResetJobName` <a name="ResetJobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetJobName"></a>

```csharp
private void ResetJobName()
```

##### `ResetNotificationProperty` <a name="ResetNotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty"></a>

```csharp
private void ResetNotificationProperty()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration"></a>

```csharp
private void ResetSecurityConfiguration()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput">CrawlerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput">NotificationPropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.arguments">Arguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName">CrawlerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationProperty`<sup>Required</sup> <a name="NotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty"></a>

```csharp
public GlueTriggerActionsNotificationPropertyOutputReference NotificationProperty { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ArgumentsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CrawlerNameInput`<sup>Optional</sup> <a name="CrawlerNameInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput"></a>

```csharp
public string CrawlerNameInput { get; }
```

- *Type:* string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `NotificationPropertyInput`<sup>Optional</sup> <a name="NotificationPropertyInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput"></a>

```csharp
public GlueTriggerActionsNotificationProperty NotificationPropertyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput"></a>

```csharp
public string SecurityConfigurationInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.arguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Arguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CrawlerName`<sup>Required</sup> <a name="CrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName"></a>

```csharp
public string CrawlerName { get; }
```

- *Type:* string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueTriggerEventBatchingConditionList <a name="GlueTriggerEventBatchingConditionList" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerEventBatchingConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.get"></a>

```csharp
private GlueTriggerEventBatchingConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueTriggerEventBatchingConditionOutputReference <a name="GlueTriggerEventBatchingConditionOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerEventBatchingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow">ResetBatchWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchWindow` <a name="ResetBatchWindow" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow"></a>

```csharp
private void ResetBatchWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput">BatchWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize">BatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow">BatchWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput"></a>

```csharp
public double BatchSizeInput { get; }
```

- *Type:* double

---

##### `BatchWindowInput`<sup>Optional</sup> <a name="BatchWindowInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput"></a>

```csharp
public double BatchWindowInput { get; }
```

- *Type:* double

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize"></a>

```csharp
public double BatchSize { get; }
```

- *Type:* double

---

##### `BatchWindow`<sup>Required</sup> <a name="BatchWindow" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow"></a>

```csharp
public double BatchWindow { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueTriggerPredicateConditionsList <a name="GlueTriggerPredicateConditionsList" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerPredicateConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.get"></a>

```csharp
private GlueTriggerPredicateConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueTriggerPredicateConditionsOutputReference <a name="GlueTriggerPredicateConditionsOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerPredicateConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName">ResetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState">ResetCrawlState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator">ResetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrawlerName` <a name="ResetCrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName"></a>

```csharp
private void ResetCrawlerName()
```

##### `ResetCrawlState` <a name="ResetCrawlState" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState"></a>

```csharp
private void ResetCrawlState()
```

##### `ResetJobName` <a name="ResetJobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName"></a>

```csharp
private void ResetJobName()
```

##### `ResetLogicalOperator` <a name="ResetLogicalOperator" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator"></a>

```csharp
private void ResetLogicalOperator()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput">CrawlerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput">CrawlStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput">LogicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName">CrawlerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState">CrawlState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrawlerNameInput`<sup>Optional</sup> <a name="CrawlerNameInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput"></a>

```csharp
public string CrawlerNameInput { get; }
```

- *Type:* string

---

##### `CrawlStateInput`<sup>Optional</sup> <a name="CrawlStateInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput"></a>

```csharp
public string CrawlStateInput { get; }
```

- *Type:* string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `LogicalOperatorInput`<sup>Optional</sup> <a name="LogicalOperatorInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput"></a>

```csharp
public string LogicalOperatorInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CrawlerName`<sup>Required</sup> <a name="CrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName"></a>

```csharp
public string CrawlerName { get; }
```

- *Type:* string

---

##### `CrawlState`<sup>Required</sup> <a name="CrawlState" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState"></a>

```csharp
public string CrawlState { get; }
```

- *Type:* string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueTriggerPredicateOutputReference <a name="GlueTriggerPredicateOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerPredicateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical">ResetLogical</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.putConditions.parameter.value"></a>

- *Type:* object

---

##### `ResetLogical` <a name="ResetLogical" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical"></a>

```csharp
private void ResetLogical()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput">LogicalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logical">Logical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions"></a>

```csharp
public GlueTriggerPredicateConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `LogicalInput`<sup>Optional</sup> <a name="LogicalInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput"></a>

```csharp
public string LogicalInput { get; }
```

- *Type:* string

---

##### `Logical`<sup>Required</sup> <a name="Logical" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logical"></a>

```csharp
public string Logical { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue"></a>

```csharp
public GlueTriggerPredicate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---


### GlueTriggerTimeoutsOutputReference <a name="GlueTriggerTimeoutsOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueTriggerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



