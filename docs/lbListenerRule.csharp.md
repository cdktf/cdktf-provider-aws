# `lbListenerRule` Submodule <a name="`lbListenerRule` Submodule" id="@cdktf/provider-aws.lbListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerRule <a name="LbListenerRule" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule aws_lb_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRule(Construct Scope, string Id, LbListenerRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig">LbListenerRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig">LbListenerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putAction"></a>

```csharp
private void PutAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putAction.parameter.value"></a>

- *Type:* object

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putCondition"></a>

```csharp
private void PutCondition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.putCondition.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbListenerRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbListenerRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbListenerRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList">LbListenerRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList">LbListenerRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.actionInput">ActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.conditionInput">ConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArnInput">ListenerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArn">ListenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.action"></a>

```csharp
public LbListenerRuleActionList Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList">LbListenerRuleActionList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.condition"></a>

```csharp
public LbListenerRuleConditionList Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList">LbListenerRuleConditionList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.actionInput"></a>

```csharp
public object ActionInput { get; }
```

- *Type:* object

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.conditionInput"></a>

```csharp
public object ConditionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenerArnInput`<sup>Optional</sup> <a name="ListenerArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArnInput"></a>

```csharp
public string ListenerArnInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.listenerArn"></a>

```csharp
public string ListenerArn { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerRuleAction <a name="LbListenerRuleAction" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleAction {
    string Type,
    LbListenerRuleActionAuthenticateCognito AuthenticateCognito = null,
    LbListenerRuleActionAuthenticateOidc AuthenticateOidc = null,
    LbListenerRuleActionFixedResponse FixedResponse = null,
    LbListenerRuleActionForward Forward = null,
    double Order = null,
    LbListenerRuleActionRedirect Redirect = null,
    string TargetGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#type LbListenerRule#type}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.order">Order</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#order LbListenerRule#order}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#target_group_arn LbListenerRule#target_group_arn}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#type LbListenerRule#type}.

---

##### `AuthenticateCognito`<sup>Optional</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateCognito"></a>

```csharp
public LbListenerRuleActionAuthenticateCognito AuthenticateCognito { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authenticate_cognito LbListenerRule#authenticate_cognito}

---

##### `AuthenticateOidc`<sup>Optional</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.authenticateOidc"></a>

```csharp
public LbListenerRuleActionAuthenticateOidc AuthenticateOidc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authenticate_oidc LbListenerRule#authenticate_oidc}

---

##### `FixedResponse`<sup>Optional</sup> <a name="FixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.fixedResponse"></a>

```csharp
public LbListenerRuleActionFixedResponse FixedResponse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#fixed_response LbListenerRule#fixed_response}

---

##### `Forward`<sup>Optional</sup> <a name="Forward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.forward"></a>

```csharp
public LbListenerRuleActionForward Forward { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#forward LbListenerRule#forward}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#order LbListenerRule#order}.

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.redirect"></a>

```csharp
public LbListenerRuleActionRedirect Redirect { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#redirect LbListenerRule#redirect}

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleAction.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#target_group_arn LbListenerRule#target_group_arn}.

---

### LbListenerRuleActionAuthenticateCognito <a name="LbListenerRuleActionAuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionAuthenticateCognito {
    string UserPoolArn,
    string UserPoolClientId,
    string UserPoolDomain,
    System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams = null,
    string OnUnauthenticatedRequest = null,
    string Scope = null,
    string SessionCookieName = null,
    double SessionTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolArn">UserPoolArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_arn LbListenerRule#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolClientId">UserPoolClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_client_id LbListenerRule#user_pool_client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolDomain">UserPoolDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_domain LbListenerRule#user_pool_domain}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#scope LbListenerRule#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionCookieName">SessionCookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_timeout LbListenerRule#session_timeout}. |

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolArn"></a>

```csharp
public string UserPoolArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_arn LbListenerRule#user_pool_arn}.

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolClientId"></a>

```csharp
public string UserPoolClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_client_id LbListenerRule#user_pool_client_id}.

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.userPoolDomain"></a>

```csharp
public string UserPoolDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_pool_domain LbListenerRule#user_pool_domain}.

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}.

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```csharp
public string OnUnauthenticatedRequest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#scope LbListenerRule#scope}.

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionCookieName"></a>

```csharp
public string SessionCookieName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_timeout LbListenerRule#session_timeout}.

---

### LbListenerRuleActionAuthenticateOidc <a name="LbListenerRuleActionAuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionAuthenticateOidc {
    string AuthorizationEndpoint,
    string ClientId,
    string ClientSecret,
    string Issuer,
    string TokenEndpoint,
    string UserInfoEndpoint,
    System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams = null,
    string OnUnauthenticatedRequest = null,
    string Scope = null,
    string SessionCookieName = null,
    double SessionTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authorization_endpoint LbListenerRule#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#client_id LbListenerRule#client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#client_secret LbListenerRule#client_secret}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#issuer LbListenerRule#issuer}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#token_endpoint LbListenerRule#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_info_endpoint LbListenerRule#user_info_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#scope LbListenerRule#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionCookieName">SessionCookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_timeout LbListenerRule#session_timeout}. |

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authorization_endpoint LbListenerRule#authorization_endpoint}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#client_id LbListenerRule#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#client_secret LbListenerRule#client_secret}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#issuer LbListenerRule#issuer}.

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#token_endpoint LbListenerRule#token_endpoint}.

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.userInfoEndpoint"></a>

```csharp
public string UserInfoEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#user_info_endpoint LbListenerRule#user_info_endpoint}.

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}.

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```csharp
public string OnUnauthenticatedRequest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#scope LbListenerRule#scope}.

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionCookieName"></a>

```csharp
public string SessionCookieName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#session_timeout LbListenerRule#session_timeout}.

---

### LbListenerRuleActionFixedResponse <a name="LbListenerRuleActionFixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionFixedResponse {
    string ContentType,
    string MessageBody = null,
    string StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#content_type LbListenerRule#content_type}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.messageBody">MessageBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#message_body LbListenerRule#message_body}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.statusCode">StatusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#status_code LbListenerRule#status_code}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#content_type LbListenerRule#content_type}.

---

##### `MessageBody`<sup>Optional</sup> <a name="MessageBody" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.messageBody"></a>

```csharp
public string MessageBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#message_body LbListenerRule#message_body}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#status_code LbListenerRule#status_code}.

---

### LbListenerRuleActionForward <a name="LbListenerRuleActionForward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionForward {
    object TargetGroup,
    LbListenerRuleActionForwardStickiness Stickiness = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.targetGroup">TargetGroup</a></code> | <code>object</code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a></code> | stickiness block. |

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.targetGroup"></a>

```csharp
public object TargetGroup { get; set; }
```

- *Type:* object

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#target_group LbListenerRule#target_group}

---

##### `Stickiness`<sup>Optional</sup> <a name="Stickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward.property.stickiness"></a>

```csharp
public LbListenerRuleActionForwardStickiness Stickiness { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#stickiness LbListenerRule#stickiness}

---

### LbListenerRuleActionForwardStickiness <a name="LbListenerRuleActionForwardStickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionForwardStickiness {
    double Duration,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.duration">Duration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#duration LbListenerRule#duration}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#enabled LbListenerRule#enabled}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#duration LbListenerRule#duration}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#enabled LbListenerRule#enabled}.

---

### LbListenerRuleActionForwardTargetGroup <a name="LbListenerRuleActionForwardTargetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionForwardTargetGroup {
    string Arn,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#arn LbListenerRule#arn}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#weight LbListenerRule#weight}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#arn LbListenerRule#arn}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroup.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#weight LbListenerRule#weight}.

---

### LbListenerRuleActionRedirect <a name="LbListenerRuleActionRedirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionRedirect {
    string StatusCode,
    string Host = null,
    string Path = null,
    string Port = null,
    string Protocol = null,
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.statusCode">StatusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#status_code LbListenerRule#status_code}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#host LbListenerRule#host}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#path LbListenerRule#path}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.port">Port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#port LbListenerRule#port}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#protocol LbListenerRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#query LbListenerRule#query}. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#status_code LbListenerRule#status_code}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#host LbListenerRule#host}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#path LbListenerRule#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#port LbListenerRule#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#protocol LbListenerRule#protocol}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#query LbListenerRule#query}.

---

### LbListenerRuleCondition <a name="LbListenerRuleCondition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleCondition {
    LbListenerRuleConditionHostHeader HostHeader = null,
    LbListenerRuleConditionHttpHeader HttpHeader = null,
    LbListenerRuleConditionHttpRequestMethod HttpRequestMethod = null,
    LbListenerRuleConditionPathPattern PathPattern = null,
    object QueryString = null,
    LbListenerRuleConditionSourceIp SourceIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.hostHeader">HostHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a></code> | host_header block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpHeader">HttpHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a></code> | http_header block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpRequestMethod">HttpRequestMethod</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a></code> | http_request_method block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.pathPattern">PathPattern</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a></code> | path_pattern block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.queryString">QueryString</a></code> | <code>object</code> | query_string block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.sourceIp">SourceIp</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a></code> | source_ip block. |

---

##### `HostHeader`<sup>Optional</sup> <a name="HostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.hostHeader"></a>

```csharp
public LbListenerRuleConditionHostHeader HostHeader { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

host_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#host_header LbListenerRule#host_header}

---

##### `HttpHeader`<sup>Optional</sup> <a name="HttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpHeader"></a>

```csharp
public LbListenerRuleConditionHttpHeader HttpHeader { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

http_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#http_header LbListenerRule#http_header}

---

##### `HttpRequestMethod`<sup>Optional</sup> <a name="HttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.httpRequestMethod"></a>

```csharp
public LbListenerRuleConditionHttpRequestMethod HttpRequestMethod { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

http_request_method block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#http_request_method LbListenerRule#http_request_method}

---

##### `PathPattern`<sup>Optional</sup> <a name="PathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.pathPattern"></a>

```csharp
public LbListenerRuleConditionPathPattern PathPattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

path_pattern block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#path_pattern LbListenerRule#path_pattern}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.queryString"></a>

```csharp
public object QueryString { get; set; }
```

- *Type:* object

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#query_string LbListenerRule#query_string}

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleCondition.property.sourceIp"></a>

```csharp
public LbListenerRuleConditionSourceIp SourceIp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

source_ip block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#source_ip LbListenerRule#source_ip}

---

### LbListenerRuleConditionHostHeader <a name="LbListenerRuleConditionHostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionHostHeader {
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionHttpHeader <a name="LbListenerRuleConditionHttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionHttpHeader {
    string HttpHeaderName,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.httpHeaderName">HttpHeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#http_header_name LbListenerRule#http_header_name}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}. |

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.httpHeaderName"></a>

```csharp
public string HttpHeaderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#http_header_name LbListenerRule#http_header_name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionHttpRequestMethod <a name="LbListenerRuleConditionHttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionHttpRequestMethod {
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionPathPattern <a name="LbListenerRuleConditionPathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionPathPattern {
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConditionQueryString <a name="LbListenerRuleConditionQueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionQueryString {
    string Value,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#value LbListenerRule#value}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#key LbListenerRule#key}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#value LbListenerRule#value}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryString.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#key LbListenerRule#key}.

---

### LbListenerRuleConditionSourceIp <a name="LbListenerRuleConditionSourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionSourceIp {
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#values LbListenerRule#values}.

---

### LbListenerRuleConfig <a name="LbListenerRuleConfig" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Action,
    object Condition,
    string ListenerArn,
    string Id = null,
    double Priority = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.action">Action</a></code> | <code>object</code> | action block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.condition">Condition</a></code> | <code>object</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.listenerArn">ListenerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#listener_arn LbListenerRule#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#id LbListenerRule#id}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#priority LbListenerRule#priority}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#tags LbListenerRule#tags}. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#tags_all LbListenerRule#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.action"></a>

```csharp
public object Action { get; set; }
```

- *Type:* object

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#action LbListenerRule#action}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.condition"></a>

```csharp
public object Condition { get; set; }
```

- *Type:* object

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#condition LbListenerRule#condition}

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.listenerArn"></a>

```csharp
public string ListenerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#listener_arn LbListenerRule#listener_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#id LbListenerRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#priority LbListenerRule#priority}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#tags LbListenerRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule#tags_all LbListenerRule#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerRuleActionAuthenticateCognitoOutputReference <a name="LbListenerRuleActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionAuthenticateCognitoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```csharp
private void ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```csharp
private void ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```csharp
private void ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```csharp
private void ResetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArnInput">UserPoolArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">UserPoolClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">UserPoolDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId">UserPoolClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```csharp
public string OnUnauthenticatedRequestInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```csharp
public string SessionCookieNameInput { get; }
```

- *Type:* string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```csharp
public double SessionTimeoutInput { get; }
```

- *Type:* double

---

##### `UserPoolArnInput`<sup>Optional</sup> <a name="UserPoolArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```csharp
public string UserPoolArnInput { get; }
```

- *Type:* string

---

##### `UserPoolClientIdInput`<sup>Optional</sup> <a name="UserPoolClientIdInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```csharp
public string UserPoolClientIdInput { get; }
```

- *Type:* string

---

##### `UserPoolDomainInput`<sup>Optional</sup> <a name="UserPoolDomainInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```csharp
public string UserPoolDomainInput { get; }
```

- *Type:* string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```csharp
public string OnUnauthenticatedRequest { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```csharp
public string SessionCookieName { get; }
```

- *Type:* string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; }
```

- *Type:* double

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```csharp
public string UserPoolArn { get; }
```

- *Type:* string

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```csharp
public string UserPoolClientId { get; }
```

- *Type:* string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```csharp
public string UserPoolDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleActionAuthenticateCognito InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

---


### LbListenerRuleActionAuthenticateOidcOutputReference <a name="LbListenerRuleActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionAuthenticateOidcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```csharp
private void ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```csharp
private void ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```csharp
private void ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```csharp
private void ResetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```csharp
public string AuthorizationEndpointInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```csharp
public string OnUnauthenticatedRequestInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```csharp
public string SessionCookieNameInput { get; }
```

- *Type:* string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```csharp
public double SessionTimeoutInput { get; }
```

- *Type:* double

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```csharp
public string UserInfoEndpointInput { get; }
```

- *Type:* string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AuthenticationRequestExtraParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```csharp
public string OnUnauthenticatedRequest { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```csharp
public string SessionCookieName { get; }
```

- *Type:* string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; }
```

- *Type:* double

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```csharp
public string UserInfoEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleActionAuthenticateOidc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

---


### LbListenerRuleActionFixedResponseOutputReference <a name="LbListenerRuleActionFixedResponseOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionFixedResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetMessageBody">ResetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageBody` <a name="ResetMessageBody" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetMessageBody"></a>

```csharp
private void ResetMessageBody()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBodyInput">MessageBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBody">MessageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `MessageBodyInput`<sup>Optional</sup> <a name="MessageBodyInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBodyInput"></a>

```csharp
public string MessageBodyInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.messageBody"></a>

```csharp
public string MessageBody { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleActionFixedResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

---


### LbListenerRuleActionForwardOutputReference <a name="LbListenerRuleActionForwardOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionForwardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putStickiness">PutStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putTargetGroup">PutTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resetStickiness">ResetStickiness</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStickiness` <a name="PutStickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putStickiness"></a>

```csharp
private void PutStickiness(LbListenerRuleActionForwardStickiness Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

---

##### `PutTargetGroup` <a name="PutTargetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putTargetGroup"></a>

```csharp
private void PutTargetGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* object

---

##### `ResetStickiness` <a name="ResetStickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.resetStickiness"></a>

```csharp
private void ResetStickiness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference">LbListenerRuleActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroup">TargetGroup</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList">LbListenerRuleActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickinessInput">StickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroupInput">TargetGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Stickiness`<sup>Required</sup> <a name="Stickiness" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickiness"></a>

```csharp
public LbListenerRuleActionForwardStickinessOutputReference Stickiness { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference">LbListenerRuleActionForwardStickinessOutputReference</a>

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroup"></a>

```csharp
public LbListenerRuleActionForwardTargetGroupList TargetGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList">LbListenerRuleActionForwardTargetGroupList</a>

---

##### `StickinessInput`<sup>Optional</sup> <a name="StickinessInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.stickinessInput"></a>

```csharp
public LbListenerRuleActionForwardStickiness StickinessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

---

##### `TargetGroupInput`<sup>Optional</sup> <a name="TargetGroupInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.targetGroupInput"></a>

```csharp
public object TargetGroupInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleActionForward InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

---


### LbListenerRuleActionForwardStickinessOutputReference <a name="LbListenerRuleActionForwardStickinessOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionForwardStickinessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickinessOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleActionForwardStickiness InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardStickiness">LbListenerRuleActionForwardStickiness</a>

---


### LbListenerRuleActionForwardTargetGroupList <a name="LbListenerRuleActionForwardTargetGroupList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionForwardTargetGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.get"></a>

```csharp
private LbListenerRuleActionForwardTargetGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbListenerRuleActionForwardTargetGroupOutputReference <a name="LbListenerRuleActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionForwardTargetGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbListenerRuleActionList <a name="LbListenerRuleActionList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.get"></a>

```csharp
private LbListenerRuleActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbListenerRuleActionOutputReference <a name="LbListenerRuleActionOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateCognito">PutAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateOidc">PutAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putFixedResponse">PutFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putForward">PutForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateCognito">ResetAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateOidc">ResetAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetFixedResponse">ResetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetForward">ResetForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetRedirect">ResetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticateCognito` <a name="PutAuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateCognito"></a>

```csharp
private void PutAuthenticateCognito(LbListenerRuleActionAuthenticateCognito Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

---

##### `PutAuthenticateOidc` <a name="PutAuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateOidc"></a>

```csharp
private void PutAuthenticateOidc(LbListenerRuleActionAuthenticateOidc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putAuthenticateOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

---

##### `PutFixedResponse` <a name="PutFixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putFixedResponse"></a>

```csharp
private void PutFixedResponse(LbListenerRuleActionFixedResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

---

##### `PutForward` <a name="PutForward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putForward"></a>

```csharp
private void PutForward(LbListenerRuleActionForward Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putRedirect"></a>

```csharp
private void PutRedirect(LbListenerRuleActionRedirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

---

##### `ResetAuthenticateCognito` <a name="ResetAuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateCognito"></a>

```csharp
private void ResetAuthenticateCognito()
```

##### `ResetAuthenticateOidc` <a name="ResetAuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetAuthenticateOidc"></a>

```csharp
private void ResetAuthenticateOidc()
```

##### `ResetFixedResponse` <a name="ResetFixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetFixedResponse"></a>

```csharp
private void ResetFixedResponse()
```

##### `ResetForward` <a name="ResetForward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetForward"></a>

```csharp
private void ResetForward()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetRedirect"></a>

```csharp
private void ResetRedirect()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.resetTargetGroupArn"></a>

```csharp
private void ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference">LbListenerRuleActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference">LbListenerRuleActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference">LbListenerRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference">LbListenerRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference">LbListenerRuleActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognitoInput">AuthenticateCognitoInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidcInput">AuthenticateOidcInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponseInput">FixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forwardInput">ForwardInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirectInput">RedirectInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticateCognito`<sup>Required</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognito"></a>

```csharp
public LbListenerRuleActionAuthenticateCognitoOutputReference AuthenticateCognito { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognitoOutputReference">LbListenerRuleActionAuthenticateCognitoOutputReference</a>

---

##### `AuthenticateOidc`<sup>Required</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidc"></a>

```csharp
public LbListenerRuleActionAuthenticateOidcOutputReference AuthenticateOidc { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidcOutputReference">LbListenerRuleActionAuthenticateOidcOutputReference</a>

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponse"></a>

```csharp
public LbListenerRuleActionFixedResponseOutputReference FixedResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponseOutputReference">LbListenerRuleActionFixedResponseOutputReference</a>

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forward"></a>

```csharp
public LbListenerRuleActionForwardOutputReference Forward { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForwardOutputReference">LbListenerRuleActionForwardOutputReference</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirect"></a>

```csharp
public LbListenerRuleActionRedirectOutputReference Redirect { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference">LbListenerRuleActionRedirectOutputReference</a>

---

##### `AuthenticateCognitoInput`<sup>Optional</sup> <a name="AuthenticateCognitoInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateCognitoInput"></a>

```csharp
public LbListenerRuleActionAuthenticateCognito AuthenticateCognitoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateCognito">LbListenerRuleActionAuthenticateCognito</a>

---

##### `AuthenticateOidcInput`<sup>Optional</sup> <a name="AuthenticateOidcInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.authenticateOidcInput"></a>

```csharp
public LbListenerRuleActionAuthenticateOidc AuthenticateOidcInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionAuthenticateOidc">LbListenerRuleActionAuthenticateOidc</a>

---

##### `FixedResponseInput`<sup>Optional</sup> <a name="FixedResponseInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.fixedResponseInput"></a>

```csharp
public LbListenerRuleActionFixedResponse FixedResponseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionFixedResponse">LbListenerRuleActionFixedResponse</a>

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.forwardInput"></a>

```csharp
public LbListenerRuleActionForward ForwardInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionForward">LbListenerRuleActionForward</a>

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.redirectInput"></a>

```csharp
public LbListenerRuleActionRedirect RedirectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArnInput"></a>

```csharp
public string TargetGroupArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbListenerRuleActionRedirectOutputReference <a name="LbListenerRuleActionRedirectOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleActionRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirectOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleActionRedirect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleActionRedirect">LbListenerRuleActionRedirect</a>

---


### LbListenerRuleConditionHostHeaderOutputReference <a name="LbListenerRuleConditionHostHeaderOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionHostHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleConditionHostHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

---


### LbListenerRuleConditionHttpHeaderOutputReference <a name="LbListenerRuleConditionHttpHeaderOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionHttpHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderNameInput">HttpHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName">HttpHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpHeaderNameInput`<sup>Optional</sup> <a name="HttpHeaderNameInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderNameInput"></a>

```csharp
public string HttpHeaderNameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName"></a>

```csharp
public string HttpHeaderName { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleConditionHttpHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

---


### LbListenerRuleConditionHttpRequestMethodOutputReference <a name="LbListenerRuleConditionHttpRequestMethodOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionHttpRequestMethodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleConditionHttpRequestMethod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

---


### LbListenerRuleConditionList <a name="LbListenerRuleConditionList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.get"></a>

```csharp
private LbListenerRuleConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbListenerRuleConditionOutputReference <a name="LbListenerRuleConditionOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHostHeader">PutHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpHeader">PutHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpRequestMethod">PutHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putPathPattern">PutPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putQueryString">PutQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putSourceIp">PutSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHostHeader">ResetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpHeader">ResetHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpRequestMethod">ResetHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetPathPattern">ResetPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostHeader` <a name="PutHostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHostHeader"></a>

```csharp
private void PutHostHeader(LbListenerRuleConditionHostHeader Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHostHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

---

##### `PutHttpHeader` <a name="PutHttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpHeader"></a>

```csharp
private void PutHttpHeader(LbListenerRuleConditionHttpHeader Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

---

##### `PutHttpRequestMethod` <a name="PutHttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpRequestMethod"></a>

```csharp
private void PutHttpRequestMethod(LbListenerRuleConditionHttpRequestMethod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putHttpRequestMethod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

---

##### `PutPathPattern` <a name="PutPathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putPathPattern"></a>

```csharp
private void PutPathPattern(LbListenerRuleConditionPathPattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putPathPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

---

##### `PutQueryString` <a name="PutQueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putQueryString"></a>

```csharp
private void PutQueryString(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putQueryString.parameter.value"></a>

- *Type:* object

---

##### `PutSourceIp` <a name="PutSourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putSourceIp"></a>

```csharp
private void PutSourceIp(LbListenerRuleConditionSourceIp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.putSourceIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

---

##### `ResetHostHeader` <a name="ResetHostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHostHeader"></a>

```csharp
private void ResetHostHeader()
```

##### `ResetHttpHeader` <a name="ResetHttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpHeader"></a>

```csharp
private void ResetHttpHeader()
```

##### `ResetHttpRequestMethod` <a name="ResetHttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetHttpRequestMethod"></a>

```csharp
private void ResetHttpRequestMethod()
```

##### `ResetPathPattern` <a name="ResetPathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetPathPattern"></a>

```csharp
private void ResetPathPattern()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetQueryString"></a>

```csharp
private void ResetQueryString()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.resetSourceIp"></a>

```csharp
private void ResetSourceIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeader">HostHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference">LbListenerRuleConditionHostHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeader">HttpHeader</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference">LbListenerRuleConditionHttpHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethod">HttpRequestMethod</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference">LbListenerRuleConditionHttpRequestMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPattern">PathPattern</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference">LbListenerRuleConditionPathPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList">LbListenerRuleConditionQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIp">SourceIp</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference">LbListenerRuleConditionSourceIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeaderInput">HostHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeaderInput">HttpHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethodInput">HttpRequestMethodInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPatternInput">PathPatternInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeader"></a>

```csharp
public LbListenerRuleConditionHostHeaderOutputReference HostHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeaderOutputReference">LbListenerRuleConditionHostHeaderOutputReference</a>

---

##### `HttpHeader`<sup>Required</sup> <a name="HttpHeader" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeader"></a>

```csharp
public LbListenerRuleConditionHttpHeaderOutputReference HttpHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeaderOutputReference">LbListenerRuleConditionHttpHeaderOutputReference</a>

---

##### `HttpRequestMethod`<sup>Required</sup> <a name="HttpRequestMethod" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethod"></a>

```csharp
public LbListenerRuleConditionHttpRequestMethodOutputReference HttpRequestMethod { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethodOutputReference">LbListenerRuleConditionHttpRequestMethodOutputReference</a>

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPattern"></a>

```csharp
public LbListenerRuleConditionPathPatternOutputReference PathPattern { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference">LbListenerRuleConditionPathPatternOutputReference</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryString"></a>

```csharp
public LbListenerRuleConditionQueryStringList QueryString { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList">LbListenerRuleConditionQueryStringList</a>

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIp"></a>

```csharp
public LbListenerRuleConditionSourceIpOutputReference SourceIp { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference">LbListenerRuleConditionSourceIpOutputReference</a>

---

##### `HostHeaderInput`<sup>Optional</sup> <a name="HostHeaderInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.hostHeaderInput"></a>

```csharp
public LbListenerRuleConditionHostHeader HostHeaderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHostHeader">LbListenerRuleConditionHostHeader</a>

---

##### `HttpHeaderInput`<sup>Optional</sup> <a name="HttpHeaderInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpHeaderInput"></a>

```csharp
public LbListenerRuleConditionHttpHeader HttpHeaderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpHeader">LbListenerRuleConditionHttpHeader</a>

---

##### `HttpRequestMethodInput`<sup>Optional</sup> <a name="HttpRequestMethodInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.httpRequestMethodInput"></a>

```csharp
public LbListenerRuleConditionHttpRequestMethod HttpRequestMethodInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionHttpRequestMethod">LbListenerRuleConditionHttpRequestMethod</a>

---

##### `PathPatternInput`<sup>Optional</sup> <a name="PathPatternInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.pathPatternInput"></a>

```csharp
public LbListenerRuleConditionPathPattern PathPatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.queryStringInput"></a>

```csharp
public object QueryStringInput { get; }
```

- *Type:* object

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.sourceIpInput"></a>

```csharp
public LbListenerRuleConditionSourceIp SourceIpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbListenerRuleConditionPathPatternOutputReference <a name="LbListenerRuleConditionPathPatternOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionPathPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPatternOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleConditionPathPattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionPathPattern">LbListenerRuleConditionPathPattern</a>

---


### LbListenerRuleConditionQueryStringList <a name="LbListenerRuleConditionQueryStringList" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionQueryStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.get"></a>

```csharp
private LbListenerRuleConditionQueryStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbListenerRuleConditionQueryStringOutputReference <a name="LbListenerRuleConditionQueryStringOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionQueryStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionQueryStringOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbListenerRuleConditionSourceIpOutputReference <a name="LbListenerRuleConditionSourceIpOutputReference" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbListenerRuleConditionSourceIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIpOutputReference.property.internalValue"></a>

```csharp
public LbListenerRuleConditionSourceIp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbListenerRule.LbListenerRuleConditionSourceIp">LbListenerRuleConditionSourceIp</a>

---



