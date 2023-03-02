# `wafregionalRuleGroup` Submodule <a name="`wafregionalRuleGroup` Submodule" id="@cdktf/provider-aws.wafregionalRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalRuleGroup <a name="WafregionalRuleGroup" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group aws_wafregional_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalRuleGroup(Construct Scope, string Id, WafregionalRuleGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig">WafregionalRuleGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig">WafregionalRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.putActivatedRule">PutActivatedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetActivatedRule">ResetActivatedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutActivatedRule` <a name="PutActivatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.putActivatedRule"></a>

```csharp
private void PutActivatedRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.putActivatedRule.parameter.value"></a>

- *Type:* object

---

##### `ResetActivatedRule` <a name="ResetActivatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetActivatedRule"></a>

```csharp
private void ResetActivatedRule()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafregionalRuleGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafregionalRuleGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafregionalRuleGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRule">ActivatedRule</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList">WafregionalRuleGroupActivatedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRuleInput">ActivatedRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActivatedRule`<sup>Required</sup> <a name="ActivatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRule"></a>

```csharp
public WafregionalRuleGroupActivatedRuleList ActivatedRule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList">WafregionalRuleGroupActivatedRuleList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ActivatedRuleInput`<sup>Optional</sup> <a name="ActivatedRuleInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRuleInput"></a>

```csharp
public object ActivatedRuleInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalRuleGroupActivatedRule <a name="WafregionalRuleGroupActivatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalRuleGroupActivatedRule {
    WafregionalRuleGroupActivatedRuleAction Action,
    double Priority,
    string RuleId,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#priority WafregionalRuleGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.ruleId">RuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#rule_id WafregionalRuleGroup#rule_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.action"></a>

```csharp
public WafregionalRuleGroupActivatedRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#action WafregionalRuleGroup#action}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#priority WafregionalRuleGroup#priority}.

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#rule_id WafregionalRuleGroup#rule_id}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}.

---

### WafregionalRuleGroupActivatedRuleAction <a name="WafregionalRuleGroupActivatedRuleAction" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalRuleGroupActivatedRuleAction {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}.

---

### WafregionalRuleGroupConfig <a name="WafregionalRuleGroupConfig" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalRuleGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MetricName,
    string Name,
    object ActivatedRule = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#metric_name WafregionalRuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#name WafregionalRuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.activatedRule">ActivatedRule</a></code> | <code>object</code> | activated_rule block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#id WafregionalRuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags WafregionalRuleGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags_all WafregionalRuleGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#metric_name WafregionalRuleGroup#metric_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#name WafregionalRuleGroup#name}.

---

##### `ActivatedRule`<sup>Optional</sup> <a name="ActivatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.activatedRule"></a>

```csharp
public object ActivatedRule { get; set; }
```

- *Type:* object

activated_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#activated_rule WafregionalRuleGroup#activated_rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#id WafregionalRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags WafregionalRuleGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags_all WafregionalRuleGroup#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalRuleGroupActivatedRuleActionOutputReference <a name="WafregionalRuleGroupActivatedRuleActionOutputReference" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalRuleGroupActivatedRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.internalValue"></a>

```csharp
public WafregionalRuleGroupActivatedRuleAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

---


### WafregionalRuleGroupActivatedRuleList <a name="WafregionalRuleGroupActivatedRuleList" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalRuleGroupActivatedRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.get"></a>

```csharp
private WafregionalRuleGroupActivatedRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafregionalRuleGroupActivatedRuleOutputReference <a name="WafregionalRuleGroupActivatedRuleOutputReference" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalRuleGroupActivatedRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.putAction"></a>

```csharp
private void PutAction(WafregionalRuleGroupActivatedRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

---

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference">WafregionalRuleGroupActivatedRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.action"></a>

```csharp
public WafregionalRuleGroupActivatedRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference">WafregionalRuleGroupActivatedRuleActionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.actionInput"></a>

```csharp
public WafregionalRuleGroupActivatedRuleAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



